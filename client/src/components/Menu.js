import { Link } from 'react-router';
import './Menu.css'
import logo from '../assets/glasses_01.png'

function Menu() {
  return (
    <div className='menu'>
      <div className='menu-home'><Link>Home</Link></div>
      <div className='menu-projects'><Link>Projects</Link></div>
      <Link><div className='menu-logo'><img className='glasses-logo' src={logo} alt="logo" /></div></Link>
      <div className='menu-skills'><Link>Skills</Link></div>
      <div className='menu-tools'><Link>Tools</Link></div>
    </div>
  )
}

export default Menu;
