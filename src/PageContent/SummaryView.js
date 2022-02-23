import { Navbar, Container, Nav, NavDropdown,Table, Button } from "react-bootstrap"
import ProjectInfo from '../Components/ProjectInfo';
import React from 'react';

const MakeSendButtons = () => {
    return (
        <div className="pull-togethor">
            <Button variant="secondary"  className="margins">
                Send to Review
            </Button>
            <Button variant="secondary"  className="margins">
                Send to Approval
            </Button>
            <Button variant="secondary"  className="margins">
                Send to Publish
            </Button>
        </div>
    )
}

const SelectAndSendData = () => {
    return (
        <Navbar bg="light" variant="light" expand="sm">
            <Container fluid>
                <MakeSendButtons />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Navbar.Text><b>Status: </b></Navbar.Text>
                    <NavDropdown title="All" id="collasible-nav-dropdown" variant="secondary">
                    <NavDropdown.Item href="#action/3.1">Canine</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text><b>Updated By: </b></Navbar.Text>
                    <NavDropdown title="All" id="collasible-nav-dropdown" variant="secondary">
                    <NavDropdown.Item href="#action/3.1">Canine TD v2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const DataTable = () => {
    return (
        <div className="margins">
            <Table striped bordered bg="dark" vaiant="dark">
            <thead>
                    <tr>
                    <th><input type="checkbox"></input></th>
                    <th>Marker name</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Last Updated</th>
                    <th>Updated By</th>
                    <th>Reviewed</th>
                    <th>Approved</th>
                    <th>Gene</th>
                    <th>Disorder Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><input type="checkbox"></input></td>
                    <td>AGSCTD002</td>
                    <td>Draft</td>
                    <td>Disorder</td>
                    <td>Neuromuscular</td>
                    <td>01/10/2021</td>
                    <td>Padmaja K</td>
                    <td>01/10/2021</td>
                    <td>01/10/2021</td>
                    <td>TYRP1</td>
                    <td>Ataxia, cerebellar, ATP1B2-related</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"></input></td>
                    <td>AGSCTD002</td>
                    <td>Draft</td>
                    <td>Disorder</td>
                    <td>Neuromuscular</td>
                    <td>01/10/2021</td>
                    <td>Padmaja K</td>
                    <td>01/10/2021</td>
                    <td>01/10/2021</td>
                    <td>TYRP1</td>
                    <td>Ataxia, cerebellar, ATP1B2-related</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"></input></td>
                    <td>AGSCTD002</td>
                    <td>Draft</td>
                    <td>Disorder</td>
                    <td>Neuromuscular</td>
                    <td>01/10/2021</td>
                    <td>Padmaja K</td>
                    <td>01/10/2021</td>
                    <td>01/10/2021</td>
                    <td>TYRP1</td>
                    <td>Ataxia, cerebellar, ATP1B2-related</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Select Project to view Summary
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Navbar.Text><b>Species: </b></Navbar.Text>
                        <NavDropdown title="Canine" id="collasible-nav-dropdown" variant="secondary">
                        <NavDropdown.Item href="#action/3.1">Canine</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Text><b>Product: </b></Navbar.Text>
                        <NavDropdown title="Canine TD v2" id="collasible-nav-dropdown" variant="secondary">
                        <NavDropdown.Item href="#action/3.1">Canine TD v2</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Text><b>Project: </b></Navbar.Text>
                        <NavDropdown title="Canine TD v2 c2" id="collasible-nav-dropdown" variant="secondary">
                        <NavDropdown.Item href="#action/3.1">Canine TD v2 c2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="pull-apart margins">
                <b>
                    Project Summary View:
                    <div>
                        Canine TD v2 
                    </div>
                </b>
                <button className="fat-button">
                    Publish Project
                </button>
                <button className="fat-button">
                    Content View
                </button>
            </div>
            <ProjectInfo />
            <SelectAndSendData />
            <DataTable />
        </>
    )
}