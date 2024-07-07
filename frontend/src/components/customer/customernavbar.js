import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartArrowDown } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import CustomerViewProfile from './customerviewprofile';
import CustomerUpdateProfile from './customerupdateprofile';
import { BsPerson, BsPencilSquare, BsTrash } from 'react-icons/bs'; // Import icons from react-icons library
import Footer from '../Page/Footer';

function CustomerNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/customer/home">Barber Service Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Barber</Nav.Link> */}
          </Nav>
          <Nav className="d-flex justify-content-center">
            {/* Search Bar */}

            <Container style={{marginInlineEnd:'12rem' }}>
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input className="form-control border-secondary py-2" type="search" defaultValue="search" />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{border:'2rem', height: '2.2rem', borderTopLeftRadius: '2px' }}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
   
          </Nav>
          <Nav>
            <Nav.Link href="/customer/complaint">Complaint</Nav.Link>
            <Nav.Link href="#booking" style={{ marginInlineStart: '2.2rem', blockSize: '30px' }}>
              <span className="icon"><FaCartArrowDown size = {30}/></span> 
            </Nav.Link>
            <NavDropdown title={<span className="icon" style={{ marginInlineStart: '2.2rem', blockSize: '30px' }}><FaCircleUser size = {30}/></span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/customer/view/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/customer/update/profile">Update Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/customer/delete/profile">Delete Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default CustomerNavbar;
