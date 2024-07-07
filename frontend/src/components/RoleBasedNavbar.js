// RoleBasedNavbar.js
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartArrowDown } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { useLogout } from '../utils/logout';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const RoleBasedNavbar = ({ userRole }) => {
    const { handleLogout } = useLogout();
    const { barberId } = useParams();
    const { id }  = useParams();
    const user = useAuth()
console.log("user", user)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          {userRole === 'Admin' && (
            <Container>
                <Navbar.Brand href="/">Barber Service Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                     <Nav>

                     <NavDropdown title={<span className="icon" style={{ marginInlineStart: '2.2rem', blockSize: '30px' }}><FaCircleUser size={30} /></span>} id="collasible-nav-dropdown">
                     <NavDropdown.Item href="/customer/view/profile">View</NavDropdown.Item>
                     <NavDropdown.Item href="/customer/update/profile">Update</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item >
                     <Button onClick={handleLogout}>Logout</Button>
                     </NavDropdown.Item>
                     </NavDropdown>
                     </Nav>
                    </Navbar.Collapse>
                </Container>
            )}
            {userRole === 'Customer' && (
                <Container>
                    <Navbar.Brand href="/customer/home">Barber Service Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="d-flex justify-content-center">
                            {/* Search Bar */}

                        <Container style={{ marginInlineEnd: '12rem' }}>
                        <div className="row">
                        <div className="col-12">
                        <div className="input-group">
                         <input className="form-control border-secondary py-2" type="search" defaultValue="search" />
                         <div className="input-group-append">
                          <button
                         className="btn btn-outline-secondary"
                          type="button"
                          style={{ border: '2rem', height: '2.2rem', borderTopLeftRadius: '2px' }}
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
                                <span className="icon"><FaCartArrowDown size={30} /></span>
                            </Nav.Link>
                            <NavDropdown title={<span className="icon" style={{ marginInlineStart: '2.2rem', blockSize: '30px' }}><FaCircleUser size={30} /></span>} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/customer/view/profile">View Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/customer/update/profile">Update Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    <Button onClick={handleLogout}>Logout</Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            )}
            {userRole === "Barber" && (
                <Container>
                    <Navbar.Brand href="#">Barber Service Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Barber</Nav.Link> */}
                        </Nav>
                        <Nav className="d-flex justify-content-center">
                            {/* Search Bar */}

                            <Container style={{ marginInlineEnd: '12rem' }}>

                            </Container>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/barber/complaint">Complaint</Nav.Link>
                            <Nav.Link as={Link} to={`/review/${barberId}/reviews`}>Rating Remarks</Nav.Link>
                
                            <NavDropdown title={<span className="icon" style={{ marginInlineStart: '2.2rem', blockSize: '30px' }}><FaCircleUser size={30} /></span>} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/barber/profile/data">View </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={`/barber/updates/${user?.id}/edit`}>Update </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    <Button onClick={handleLogout}>Logout</Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            )}
        </Navbar>

        // <nav>
        //   <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        // {userRole === 'admin' && (
        //   <li>
        //     <Link to="/admin">Admin Dashboard</Link>
        //   </li>
        //     )}
        // {userRole === 'Customer' && (
        //   <li>
        //     <Link to="/user">Customer Dashboard</Link>
        //   </li>
        // )}
        //     <li>
        //       <Link to="/Barbar">Profile</Link>
        //     </li>
        //   </ul>
        // </nav>
    );
};

export default RoleBasedNavbar;
