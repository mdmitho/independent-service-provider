import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user]=useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth)
  }
    return (
        <div> 
            <Navbar bg="info" expand="lg">
  <Container className='py-2'>
    <Navbar.Brand className='text-white fs-4  pe-5' >DENTIST CARE</Navbar.Brand>
    <Navbar.Toggle  aria-controls="basic-navbar-nav " />
    <Navbar.Collapse className='text-white ' id="basic-navbar-nav">
      <Nav className="me-auto">
  
    <Link className='text-white text-decoration-none px-2 fs-5  ' to="home">Home</Link>
    <Link className='text-white text-decoration-none px-2 fs-5 '  to="service">service</Link>
    <Link className='text-white text-decoration-none px-2 fs-5 '  to="blogs">Blogs</Link>
    <Link className='text-white text-decoration-none px-2 fs-5 '  to="about">About</Link>

      </Nav>
      <Nav>
          
        { 
        user?
         <button className='btn btn-info text-white fs-5 ps-2' onClick={handleSignOut}>
          Sign Out
        </button>
        :
        <Nav.Link className=' text-white fs-5 ps-2' as={Link} to="login">Login</Nav.Link>
        
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;