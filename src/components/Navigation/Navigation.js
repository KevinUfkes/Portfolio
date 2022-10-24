import './Navigation.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap?Container';

function Navigation(props) {
    return (
        <>
            <div className="App">
                <Navbar bg={props.bg} expand={props.expand} variant={props.bg}> 
                    <Container>
                        <Navbar.Brand href={props.title[1]}><strong>{ props.title[0] }</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {props.links.map((link) => 
                                    <Nav.Link href={link[1]}>{link[0]}</Nav.Link>
                                )}
                            
                                {
                                    props.dropdown.length>0 &&

                                    <NavDropdown title={props.dropdownTitle}>
                                        {
                                            props.dropdown.map((dropdown) => {
                                                return (
                                                    <NavDropdown.Item href={dropdown[1]}>{dropdown[0]}</NavDropdown.Item>
                                                )
                                            })
                                        }
                                    </NavDropdown>
                                }    
                            </Nav>                    
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Navigation;