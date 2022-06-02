import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './img/lvc-logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if (window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}/>
      <nav className='navbar'>
            <Link to="/" className="navbar-logo">
                <img className='lvc-logo' src={logo} alt=""/>
            </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li
            className='nav-item'b
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/product/:id'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Nos Vins <i className='' />
            </Link>
          </li>
          <li 
          className='nav-item'>

            <Link
              to='/Services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className=''/>
            </Link>
          </li>
          <li 
          className='nav-item'>

            <Link
              to='/Cafet'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cafeteria <i className=''/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              
            </Link>
          </li>
        </ul>
        <div className='blur-effect'></div>
      </nav>
    </>
  );
}

export default Navbar;
