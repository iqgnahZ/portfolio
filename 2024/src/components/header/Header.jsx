import Switch from 'react-switch'
import './header.css'
import { useTheme } from '../../context/userTheme'


const Header = () => {

  const {isDarkTheme, toggleTheme} = useTheme()

  return (
    <div className="nav">
      <div className="nav_wrapper container">
        <div className="nav_logo">Rick</div>
        <ul className="nav_menu">
          <li className="nav_menu_items">
            <a href="#home">Home</a>
          </li>
          <li className="nav_menu_items">
            <a href="#services">Services</a>
          </li>
          <li className="nav_menu_items">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav_menu_items">
            <a href="#protfolio">Portfolio</a>
          </li>
          <li className="nav_menu_items">
            <a href="#contact">Contact</a>
          </li>
          <div className="buttons">
            <label htmlFor="" className='switch'>
              <Switch height={24} width={48} onColor='#4D4D4D' offColor='#ccc' onChange={toggleTheme} checked = {isDarkTheme}/>
            </label>
            <a href="" className='button'>
              Hire Me
            </a>
          </div>
        </ul>
      </div>
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    </div>
  )
}

export default Header