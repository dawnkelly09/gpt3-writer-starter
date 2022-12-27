import Head from 'next/head'
import Image from 'next/image'
import buildspaceLogo from '../assets/buildspace-logo.png'
import logo from '../assets/logo.png'
//import nuggImage from '../assets/Nuggs.png'
import { useState } from 'react'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

  const onUserChangedText = (event) => {
    //TEST: text input is rendering to textbox
    //console.log(event.target.value)
    setUserInput(event.target.value)
  }
  return (
    <div className="root">
      <Head>
        <title>Cash'd</title>
      </Head>
      <div className="container">
        <div className='nav-container'>
          <div className='nav-logo'>
            <Image src={logo} alt="Cash'd logo" />
          </div>
        </div>
        <div className="header">
          <div className="header-title">
            <h1>Cash'd Strain Finder</h1>
          </div>
          <div className="header-subtitle">
            <h2>Let your virtual budtender know what you're looking for from your ideal strain!</h2>
            
          </div>
        </div>
        <div className="prompt-container">
          
          <textarea 
            className="prompt-box"
            placeholder="What can Cash'd help you find today?"
            value={userInput}
            onChange={onUserChangedText} 
            />
          <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Suggest A Strain</p>}
              </div>
            </a>
          </div>
          {apiOutput && (
          <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Our suggestion:</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
          )}
        </div>
      </div>
      <div className="badge-container grow">
          
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
