import './App.css';
import Menu from '../components/Menu';
import Port from '../components/Port';
import Chat from '../components/Chat';

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
      <div className='projects'>
        Projects
      </div>
    </div>
  );
}

export default App;
