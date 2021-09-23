import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (

    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Prova DAW</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Item as={Link} className= "nav-link" to="/"  >Usuario</Nav.Item>
                <Nav.Item as={Link} className= "nav-link" to="/dados" >Admin</Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header;