import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div> 
            <Navbar bg="info" expand="lg">
  <Container className='py-2'>
    <Navbar.Brand className='text-white fs-4 pe-5 px-2' >DENTIST CARE</Navbar.Brand>
    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className='text-white' id="basic-navbar-nav">
      <Nav className="me-auto">
  
    <Link className='text-white text-decoration-none px-2 fs-5  ps-5' to="home">Home</Link>
    <Link className='text-white text-decoration-none px-2 fs-5 '  to="service">service</Link>
    <Link className='text-white text-decoration-none px-2 fs-5 '  to="blogs">Blogs</Link>

      </Nav>
      <Nav>
          
          <Nav.Link className='text-white' as={Link} to="login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;