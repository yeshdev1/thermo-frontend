import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import logo from '../Images/logo.jpeg';
import { useNavigate } from 'react-router-dom';

function NavBarComponent() {
    const navigate = useNavigate()
    const setCurrentPage = () => {
        navigate('/')
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" onClick={() => setCurrentPage()}>
                    <img
                        alt=""
                        src={logo}
                        width="120"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Ion Torrent - Marker Content Development System
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {/* <Nav>
                        <NavDropdown title="Bell Icon" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Img</Nav.Link>
                        <Navbar.Text>
                            <b>
                                Srinivas
                            </b>
                        </Navbar.Text>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent;