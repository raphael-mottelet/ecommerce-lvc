import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './img/lvc-logo.svg';
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../actions/userActions'


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


  const userLogin = useSelector(state => state.userLogin)
  //on renvoie les infos de l'user lors de sa connexion
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch((logout))
    //dispatchEvent((logout))   precdedente erreur
  }


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
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Produit'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Produits <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
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
          </li>
        </ul>
        {/**{userInfo ? (
          <NavDropdown title={userInfo.name} id='username' className='lien-login'>
              <Link to='/profile'>
                  <NavDropdown.Item>Profil</NavDropdown.Item>
              </Link>
              <Link to='/http://localhost:8000/admin/'>
              <NavDropdown.Item>Administration</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logoutHandler}>Deconnexion</NavDropdown.Item>
          </NavDropdown>
        ): (
          <Link 
          to='/login'
          className='nav-links, lien-login'
          onClick={closeMobileMenu}>
                  <Nav.Link href="/login"><i className="fas fa-user"></i>Connexion</Nav.Link>
          </Link>
        )}**/}
      </nav>
    </>
  );
}

export default Navbar;
