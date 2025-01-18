import './Port.css'
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import rustLogo from '../assets/rust.png';

function Port() {
  return (
    <div className='header-content-container'>
      <div className='inner-header-content'>
        <div className='left-header-content'>
          <div className='portfolio-text'>PORTFOLIO</div>
          <div className='fullname-text'>TANAKRIT MAENPHOL</div>
          <div className='description-text'>Full-Stack Software Engineer <br />
            driven by relentless self-improvement <br />
            and technical growth.
          </div>
          <div className="ask-text">
            Ask something about me
          </div>
          <div className='dashed-arrow' />
        </div>
        <div className='right-header-content'>
          <div className='profile-img' />
          <img className='react-logo' src={reactLogo} alt="react" />
          <img className='node-logo' src={nodeLogo} alt="node" />
          <img className='rust-logo' src={rustLogo} alt="rust" />
        </div>
      </div>
    </div>
  )
}

export default Port;
