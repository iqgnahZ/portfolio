import Switch from 'react-switch'
import './header.css'
import { useTheme } from '../../context/userTheme'
import { useState } from 'react'


const Header = () => {

  const {isDarkTheme, toggleTheme} = useTheme()
  const [isMobileMenuOpen, setIMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="nav_wrapper container">
        <div className="nav_logo">Rick</div>
        <ul className={`nav_menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
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
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>

    </div>
  )
}

export default Header