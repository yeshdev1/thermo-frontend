import { Navbar, Container, Nav, NavDropdown,Table, Button } from "react-bootstrap"
import ProjectInfo from '../Components/ProjectInfo';
import React, { useState, useEffect } from 'react';
import { PROJECT_VIEW } from "../Strings/strings";
import { request } from "../Api/api";
import { DataTable } from '../Components/DataTable';
import '../App.css';

const MakeSendButtons = () => {
    return (
        <div className="pull-togethor">
            <Button className="margins default-button">
                Send to Review
            </Button>
            <Button className="margins default-button">
                Send to Approval
            </Button>
            <Button className="margins default-button">
                Send to Publish
            </Button>
        </div>
    )
}

const SelectAndSendData = () => {
    return (
        <Navbar bg="light" variant="light" expand="sm">
            <MakeSendButtons />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <div className="margins">
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
            </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ({
    changePage,
    projectId
}) => {
    if (projectId === undefined || projectId === null) {
        return null
    }
    const [data, setProjectSummaryInfo] = useState({})
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-list",setProjectList);
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-summary?projectId=" + projectId, setProjectSummaryInfo)
    }, [])

    useEffect(() => {
        console.log(projectList)
    },[projectList])

    if (data[0] !== undefined) {
    return (
        <>
            <Navbar bg="light" variant="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Project Summary View
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Navbar.Text><b>Select project to view summary:</b></Navbar.Text>
                        <Navbar.Text><b> Species: </b></Navbar.Text>
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
            <div className="pull-between">
                <div>
                    <div className="margins">
                        {data[0].speciesName}
                        <b>
                            <div>
                                {data[0].projectName}
                            </div>
                        </b>
                    </div>
                    <ProjectInfo
                        projectStatus={data[0].projectStatus}
                        lastUpdated={data[0].lastUpdatedDate}
                        createdDate={data[0].createdDate}
                        updatedBy={data[0].updatedBy}
                        productPanel={data[0].productPanel}
                        parentProject={data[0].parentProject}
                        teamData={data[0].teamData}
                        statusData={data[0].statusData}
                    />
                </div>
                <div className="pull-down">
                    <button className="fat-button">
                        Publish Project
                    </button>
                    <button className="fat-button" onClick={() => changePage(PROJECT_VIEW)}>
                        Content View
                    </button>
                </div>
            </div>
            <SelectAndSendData/>
            <DataTable
                categoryWiseDisorderMarkerList={data[0].categoryWiseDisorderMarkerList}
                categoryWiseTraitMarkerList={data[0].categoryWiseTraitMarkerList}
            />
        </>
    )
    }
    return (<div id="loader"></div>)
}