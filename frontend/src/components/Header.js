import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import logo from './img/lvc-logo.svg'


// on affiche les différents liens souhaités avec une personalisation bootstrap

function Header() {
  return (
      <header className="pad-3">
          <Navbar bg="primary" expand="lg" collapseOnSelect>
    <Container>
    <Navbar.Brand href="/">
            <img
          alt=""
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className='pad-5'>
      <Nav className="mr-auto">
        <Nav.Link href="/panier"><i className="fas fa-shopping-cart"></i>Panier</Nav.Link>
        <Nav.Link href="/produits"><i className="fa-solid fa-tomato"></i>Produits</Nav.Link>
        <Nav.Link href="/cafeteria"><i className="fa-solid fa-mug-hot"></i>Cafétéria</Nav.Link>
        <Nav.Link href="/Promo"><i className="fa-solid fa-tags"></i>Promo</Nav.Link>
        <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>

      </Nav>
      </div>
    </Navbar.Collapse>
    </Container>
</Navbar>
      </header>
  )
}

export default Header