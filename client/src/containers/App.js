import './App.css';
import Menu from '../components/Menu';
import Port from '../components/Port';
import Chat from '../components/Chat';
import Glassy from '../components/Glassy';

function App() {
  return (
    <div className="container">
      <div className='header'>
        <div className='bg' />
        <header className="inner-container">
          <Menu />
          <Port />
          <Chat />
        </header>
      </div>
      <div className='linear-line' />
      <div className='projects-container'>
        <div className='inner-projects-container'>
          <div className='projects-text'>Projects</div>
          <div className='glassy-box'>
            <div className='left-project'>
              <Glassy>
                <div title="AgentDev">This is content</div>
              </Glassy>
            </div>
            <div className='center-project'>
              <div className='center-top'>
                <Glassy>
                  <div title="AgentDev">This is content</div>
                </Glassy>
              </div>
              <div className='center-bottom'>
                <Glassy>
                  <div title="AgentDev">This is content</div>
                </Glassy>
              </div>
            </div>
            <div className='right-project'>
              <Glassy>
                <div title="AgentDev">This is content</div>
              </Glassy>
            </div>
          </div>
        </div>
      </div>
      <div className='skills-container'>
      </div>
    </div>
  );
}

export default App;
