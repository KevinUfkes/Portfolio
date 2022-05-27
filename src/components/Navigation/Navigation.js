import './Navigation.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/"><strong>kevinufkes.ca</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Navigation;