import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={require('../images/logo.png')} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link className='text-decoration-none text-black ms-4 fs-5 fw-medium' to='/' >Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-black ms-4 fs-5 fw-medium' to='/shop' >Shop</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-black ms-4 fs-5 fw-medium' to='/shop' >Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-black ms-4 fs-5 fw-medium' to='/shop' >Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
