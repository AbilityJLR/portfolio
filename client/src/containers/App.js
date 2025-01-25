import './App.css';
import githubLogo from '../assets/github.png';
import AutoplayCarousel from '../components/AutoplayCarousel';
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
      <div className='quote-container'>
        <div className='inner-quote-container'>
          <div className='quote'>
            <q>The best way to predict the future is to invent it.</q>
          </div>
        </div>
        <div className='quote-credit'>— Alan Kay</div>
      </div>
      <div className='projects-container'>
        <div className='inner-projects-container'>
          <div className='projects-text'>MY <span className='linear-color'>PROJECTS</span></div>
          <div className='glassy-box'>
            <div className='left-project'>
              <Glassy size={{ width: "100%", height: "400px" }}>
                <div className='img-project-tuboardgames'></div>
                <div className='project-content-title'>TU Board Games</div>
                <div className='project-content'>✨ A real-time web application that allows users to play multiplayer board games, such as Spyfall, using WebSocket technology.</div>
                <div className='bottom-project-container'>
                  <div className='more-btn'>see more</div>
                  <div><img src={githubLogo} alt="git" /></div>
                </div>
              </Glassy>
            </div>
            <div className='center-project'>
              <div className='center-top'>
                <Glassy size={{ width: "100%", height: "400px" }}>
                  <div className='img-project-devonaut'></div>
                  <div className='project-content-title'>Devonaut</div>
                  <div className='project-content'>✨ Navigate the coding cosmos with our all-in-one IDE for writing, debugging, and translating.</div>
                  <div className='bottom-project-container'>
                    <div className='more-btn'>see more</div>
                    <div><img src={githubLogo} alt="git" /></div>
                  </div>
                </Glassy>
              </div>
              <div className='center-bottom'>
                <Glassy size={{ width: "100%", height: "400px" }}>
                  <div className='img-project-replaceword'></div>
                  <div className='project-content-title'>Replace word</div>
                  <div className='project-content'>✨ This plugin replaces the word under the cursor and changes it throughout the current file. I made it more convenient.</div>
                  <div className='bottom-project-container'>
                    <div className='more-btn'>see more</div>
                    <div><img src={githubLogo} alt="git" /></div>
                  </div>
                </Glassy>
              </div>
            </div>
            <div className='right-project'>
              <Glassy size={{ width: "100%", height: "400px" }}>
                <div className='img-project-agentdev'></div>
                <div className='project-content-title'>AgentDev</div>
                <div className='project-content'>✨ Leverage AI-powered Agents to seamlessly create and manage websites directly from the terminal, unlocking your productivity.</div>
                <div className='bottom-project-container'>
                  <div className='more-btn'>see more</div>
                  <div><img src={githubLogo} alt="git" /></div>
                </div>
              </Glassy>
            </div>
          </div>
        </div>
      </div>
      <div className='skills-container'>
        <div className='inner-skills-container'>
          <div className='skills-text'>MY <span className='linear-color'>SKILLS</span> AND CURRENT <span className='linear-color'>LEARNING</span></div>
          <AutoplayCarousel />
        </div>
      </div>
      <div className='linear-line-footer' />
      <div className='footer'>
        <div className='footer-top'>
          TANAKRIT
        </div>
        <div className='small-quote'>
          Embrace challenges as opportunities to grow: every expert was once a beginner.
        </div>
        <div className='contacts-container'>
          <div className='left-contacts'>
            <div className='followme-text'>
              Follow me
            </div>
          </div>
          <div className='right-contacts'>
            <div className='contacts-text'>
              Contacts
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
