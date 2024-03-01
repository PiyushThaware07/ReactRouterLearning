import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="home" className='mx-5'>Home</Link>
            <Link to="about" className='mx-5'>About</Link>
            <Link to="contactus" className='mx-5'>Contact Us</Link>
            <Link to="post" className='mx-5'>Posts</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}