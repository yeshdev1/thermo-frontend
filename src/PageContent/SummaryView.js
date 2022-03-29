import { Navbar, Container, Nav, NavDropdown,Table, Button } from "react-bootstrap"
import ProjectInfo from '../Components/ProjectInfo';
import React, { useState, useEffect } from 'react';
import { PROJECT_VIEW } from "../Strings/strings";
import { request } from "../Api/api";
import { DataTable } from '../Components/DataTable';
import { SuccessMiniModal } from '../Components/Messages';
import '../App.css';
import { useNavigate, useParams } from "react-router-dom";

const MakeSendButtons = ({
    projectId,
    checkedList,
    changedCheckedList
}) => {
    const [statusReview, setStatusReview] = useState(false);
    const [statusApprove, setStatusApprove] = useState(false);
    const [statusPublish, setStatusPublish] = useState(false);
    const handleSendData = (projectId,checkedList,type) => {
        const data = [];
        let payload;
        checkedList.forEach(markerId => {
            const obj = {
                "markerId": markerId,
                "projectId": projectId
            }
            data.push(obj);
            payload = {"data":data}
        })
        switch (type) {
            case "review":
                request("POST", "http://202.153.40.2:9500/MCDS/mcds/API/SendToReview",setStatusReview,payload)
                break;
            case "approve":
                request("POST", "http://202.153.40.2:9500/MCDS/mcds/API/SendToApprove",setStatusApprove,payload)
                break;
            case "publish":
                request("POST", "http://202.153.40.2:9500/MCDS/mcds/API/SendToPublish",setStatusPublish,payload)
                break;
        }
    }

    useEffect(() => {
        changedCheckedList([])
    },[statusReview,statusApprove,statusPublish])

    return (
        <div className="pull-togethor">
            <SuccessMiniModal
                setStatus={setStatusReview}
                status={statusReview}
                changedCheckedList={changedCheckedList}
            >
                The selected <b>project and markers</b> have been sent to Review!
            </SuccessMiniModal>
            <SuccessMiniModal
                setStatus={setStatusApprove}
                status={statusApprove}
                changedCheckedList={changedCheckedList}
            >
                The selected <b>project and markers</b> have been sent to Approval!
            </SuccessMiniModal>
            <SuccessMiniModal
                setStatus={setStatusPublish}
                status={statusPublish}
                changedCheckedList={changedCheckedList}
            >
                The selected <b>project and markers</b> have been sent to Publish!
            </SuccessMiniModal>
            <Button
                className="margins default-button"
                onClick={() => handleSendData(projectId,checkedList,"review")}
            >
                Send to Review
            </Button>
            <Button
                className="margins default-button"
                onClick={() => handleSendData(projectId,checkedList,"approve")}
            >
                Send to Approval
            </Button>
            <Button
                className="margins default-button"
                onClick={() => handleSendData(projectId,checkedList,"publish")}
            >
                Send to Publish
            </Button>
        </div>
    )
}

const SelectAndSendData = ({
    projectId,
    checkedList,
    changedCheckedList
}) => {
    return (
        <Navbar bg="light" variant="light" expand="sm">
            <MakeSendButtons
                projectId={projectId}
                checkedList={checkedList}
                changedCheckedList={changedCheckedList}
            />
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

export default () => {
    const { projectId }  = useParams();
    const navigate = useNavigate();
    const changePage = (projectId) => {
        navigate('/content/'+projectId)
    }
    const backToLanding = () => {
        navigate('/')
    }
    if (projectId === undefined || projectId === null) {
        return (
            <div className="loading">
                No project with the Id exists
                Click here to head back to dashboard:
                <div>
                    <Button onClick={() => backToLanding()}>
                        Dashboard
                    </Button>
                </div>
            </div>
        )
    }
    const [checkedList,changedCheckedList] = useState([]); // adding the markerIds here
    const [data, setProjectSummaryInfo] = useState({})
    const [projectList, setProjectList] = useState([]);
    const [publishStatus, setPublishStatus] = useState(false)
    const onClickPublishProject = (projectId) => {
        request("POST", "http://202.153.40.2:9500/MCDS/mcds/API/ProjectPublish?projectId="+projectId,setPublishStatus,{})
    }
    useEffect(() => {
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-list",setProjectList);
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-summary?projectId=" + projectId, setProjectSummaryInfo)
    }, [])

    if (data[0] !== undefined) {
        return (
            <>  
                <SuccessMiniModal
                    status={publishStatus}
                    setStatus={setPublishStatus}
                >
                    Publishing the selected project is done
                </SuccessMiniModal>
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
                        <button
                            className="fat-button"
                            onClick={() => onClickPublishProject(projectId)}
                        >
                            Publish Project
                        </button>
                        <button className="fat-button" onClick={() => changePage(projectId)}>
                            Content View
                        </button>
                    </div>
                </div>
                <SelectAndSendData
                    projectId={projectId}
                    checkedList={checkedList}
                    changedCheckedList={changedCheckedList}
                />
                <DataTable
                    categoryWiseDisorderMarkerList={data[0].categoryWiseDisorderMarkerList}
                    categoryWiseTraitMarkerList={data[0].categoryWiseTraitMarkerList}
                    checkedList={checkedList}
                    changedCheckedList={changedCheckedList}
                />
            </>
        )
    }
    return (<div id="loader"></div>)
}