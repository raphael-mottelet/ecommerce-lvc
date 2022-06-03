import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import logo from './img/lvc-beauvais.svg'
import { useDispatch, useSelector } from 'react-redux'
import './header.css'
import { Link } from 'react-router-dom'
import {logout} from '../actions/userActions'


// on affiche les différents liens souhaités avec une personalisation bootstrap

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  //on renvoie les infos de l'user lors de sa connexion
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch((logout))
    //dispatchEvent((logout))   precdedente erreur
  }

  return (
      <header className="pad-3, headercss">
          <Navbar bg="light" expand="lg" collapseOnSelect>
    <Container>
    <Navbar.Brand href="/" className='logo-lvc'>
            <img
          alt=""
          src={logo}
          width="220"
          height="90"
          className="d-inline-block align-top"
        />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className='pad-5'>
      <Nav className="mr-auto">
        <Nav.Link href="/panier"><i className="fas fa-shopping-cart"></i>Panier</Nav.Link>
        <Nav.Link href="/produits"><i className="fa-solid fa-wine-bottle"></i>Nos Produits</Nav.Link>
        <Nav.Link href="/cafeteria"><i className="fa-solid fa-baguette"></i>Cafeteria</Nav.Link>
        <Nav.Link href="/Promo"><i className="fa-solid fa-tags"></i>Promotions</Nav.Link>

        {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
              <Link to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
              </Link>
              <Link to=''>
              <NavDropdown.Item>Administration</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logoutHandler}>Deconnexion</NavDropdown.Item>
          </NavDropdown>
        ): (
          <Link to='/login'>
                  <Nav.Link href="/login"><i className="fas fa-user"></i>Connexion</Nav.Link>
          </Link>
        )}

      </Nav>
      </div>
    </Navbar.Collapse>
    </Container>
</Navbar>
      </header>
  )
}

export default Header