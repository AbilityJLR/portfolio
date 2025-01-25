import './autoplaycarousel.css'
import jsLogo from '../assets/JavaScript-logo.png'
import tsLogo from '../assets/Typescript_logo.png'
import reactLogo from '../assets/react-logo-png.png'
import nextLogo from '../assets/nextjs-icon.png'
import nodeLogo from '../assets/nodejs-icon.png'
import Glassy from './Glassy';

function AutoplayCarousel() {
  return (
    <>
      <div className="slider" style={{ '--height': '100px', '--width': '400px', '--quantity': '10' }}>
        <div className="list">
          <div className='item' style={{ '--position': '1' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src={jsLogo} alt="JavaScript" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>JavaScript</div>
                  <div>Used for dynamic and interactive web content.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '2' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src={tsLogo} alt="TypeScript" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>TypeScript</div>
                  <div>JavaScript with static typing for better maintainability.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '3' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src={reactLogo} alt="ReactJS" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>ReactJS</div>
                  <div>Library for building interactive UIs using components.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '4' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src={nextLogo} alt="NextJS" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>NextJS</div>
                  <div>Framework for server-rendered React apps with optimization.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '5' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src={nodeLogo} alt="NodeJS" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>NodeJS</div>
                  <div>Run JavaScript on the server for scalable apps.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '6' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://img.icons8.com/color/512/express-js.png" alt="ExpressJS" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>ExpressJS</div>
                  <div>Lightweight Node.js framework for building web apps.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '7' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://img.icons8.com/color/512/python.png" alt="Python" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Python</div>
                  <div>Versatile language for web, data, AI, and more.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '8' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png" alt="Java" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Java</div>
                  <div>Object-oriented language for mobile, web, and enterprise apps.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '9' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://www.cdnlogo.com/logos/f/49/fastapi.svg" alt="FastAPI" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>FastAPI</div>
                  <div>High-performance Python framework for APIs with async support.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '10' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://www.earlysoft.co.kr/wp-content/uploads/2021/04/react-native-259x300.png" alt="React Native" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>React Native</div>
                  <div>Build cross-platform mobile apps using JavaScript and React.</div>
                </div>
              </div>
            </Glassy>
          </div>
        </div>
      </div>
      <div className="slider" reverse="true" style={{ '--height': '100px', '--width': '400px', '--quantity': '12' }}>
        <div className="list">
          <div className='item' style={{ '--position': '1' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="Figma" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Figma</div>
                  <div>Cloud-based design tool for UI, prototyping, and collaboration.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '2' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/2048px-Diagrams.net_Logo.svg.png" alt="Draw.io" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Draw.io</div>
                  <div>Web tool for creating diagrams and flowcharts.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '3' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://i2.wp.com/sysad.mn/wp-content/uploads/2019/02/cropped-linux-system-command-line-icon.png?ssl=1" alt="Linux Command" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Linux Command</div>
                  <div>Text-based instructions for performing tasks on Linux OS.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '4' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" alt="Docker" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Docker</div>
                  <div>Platform for building and managing apps in lightweight containers.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '5' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://i0.wp.com/codeblog.dotsandbrackets.com/wp-content/uploads/2016/10/compose-logo.jpg?fit=622%2C678&ssl=1" alt="Docker Compose" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Docker Compose</div>
                  <div>Tool for managing multi-container Docker apps using YAML.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '6' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256" alt="Postman" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Postman</div>
                  <div>Platform for designing, testing, and documenting APIs.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '7' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uEqD0C38fQX4PSzW1YOQuIBaGR06NPNIyQ&s" alt="Expo" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Expo</div>
                  <div>Framework for building cross-platform mobile apps using React Native.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '8' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Git</div>
                  <div>Version control system for tracking code changes and collaboration.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '9' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>GitHub</div>
                  <div>Cloud platform for hosting and managing Git repositories.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '10' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" alt="Jira" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Jira</div>
                  <div>Project management tool for agile teams to plan, track, and manage tasks and bugs.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '11' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://img.icons8.com/fluent/512/confluence.png" alt="Confluence" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>Confluence</div>
                  <div>Collaboration platform for creating and sharing documentation and project content.</div>
                </div>
              </div>
            </Glassy>
          </div>
          <div className='item' style={{ '--position': '12' }}>
            <Glassy size={{ width: "400px", height: "100px" }}>
              <div className='skill-content'>
                <div className='skill-img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg" alt="NeoVim" className='logo-skill-img' />
                </div>
                <div className='skill-description'>
                  <div style={{ fontWeight: "bold" }}>NeoVim</div>
                  <div>Open-source text editor with enhanced features and plugin support.</div>
                </div>
              </div>
            </Glassy>
          </div>
        </div>
      </div>
    </>
  )
}

export default AutoplayCarousel;
