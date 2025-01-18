import './Chat.css'
import chatLogo from '../assets/chat_logo.png';
import enterLogo from '../assets/enter_logo.png';
import { Link } from 'react-router';

function Chat() {
  return (
    <div className='chat-container'>
      <div className='inner-chat-container'>
        <span className='chat-logo'><img className='chat-logo-img' src={chatLogo} alt="chat" /></span>
        <input className='chat' placeholder="Hello, I'm Ram may I help you?" />
        <Link>
          <img className='enter-logo' src={enterLogo} alt="enter" />
        </Link>
      </div>
    </div>
  )
}

export default Chat;
