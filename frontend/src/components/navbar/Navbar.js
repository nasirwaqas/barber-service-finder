import Container from 'react-bootstrap/Container';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export default function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Navbar.Brand as={NavLink} to="/">Barber Service Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
          </Nav>
          <Nav>
            {/* You can add more navigation items here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
