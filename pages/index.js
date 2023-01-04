import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>Cash'd</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Welcome to Cash'd</h1>
          </div>
          <div className="header-subtitle">
            <h2>Cash'd gives you easy to use tools to find your ideal cannabis strain</h2>
          </div>
          <div>
            <p>Use our virtual budtender to find your ideal strain. Just tell us about your desired cannabis experience and effects</p>
          </div>
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
