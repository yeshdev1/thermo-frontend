
import './pageContentStyles.css';
import ProjectInfo from '../Components/ProjectInfo';
import { ListGroup } from 'react-bootstrap';
import { COMMENTS, WEBLINKS, ARTICLES, REVIEW, LANDING_PAGE } from '../Strings/strings';
import React, { useState, useEffect } from 'react';
import { InfoTile } from '../Components/ProjectInfo';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { request } from "../Api/api";
import '../App.css';

const groups = [
    "AGSCTD002",
    "AGSCTD006",
    "AGSCTD010",
    "AGSCTD011",
    "AGSCTD012",
    "AGSCTD002",
    "AGSCTD006",
    "AGSCTD010",
    "AGSCTD011",
    "AGSCTD012",
    "AGSCTD002",
    "AGSCTD006",
    "AGSCTD010"
];

const fieldNames = [
    "Disease name",
    "Severity",
    "Breeds affected",
    "Prevalence",
    "Symptoms",
    "Prognosis",
    "Treatment And Management",
    "References"
]

const RenderField = ({
    fieldName
}) => (
    <div className="pull-between small-margins section-background">
        <span className="field-name">{fieldName}</span>
        <span><textarea rows="2" cols="50"></textarea></span>
        <span>
            <InfoTile>
                <div className="parent-project-info">
                    Last updated: Dec 11th, 2011 - 6:35 PM
                </div>
                <div className="parent-project-info">
                    Updated by: Anuradha Udumudi
                </div>
            </InfoTile>
        </span>
    </div>
)

const FieldsSection = () => {
    return (
        <div>
            <div className="pull-between margins">
                <span>This space is for displaying messages</span>
                <span>
                    <button className="default-button">Save Fields</button>
                </span>
            </div>
            {fieldNames.map(name => {
                return (
                    <RenderField
                        fieldName={name}
                    />
                )
            })}
        </div>
    )
}

const ToggleFunctions = () => {
    const [value,setValue] = useState(0)
    const handleChange = (index) => {
        setValue(index)
    }
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                variant="scrollable"
                scrollButtons="auto"
            >
            <Tab value={0} label="Comments" onClick={() => handleChange(0)} />
            <Tab value={1} label="Weblinks" onClick={() => handleChange(1)} />
            <Tab value={2} label="Articles" onClick={() => handleChange(2)} />
            </Tabs>
        </div>
    );
}

const SpecificContent = () => {
    return (
        <div>
            <div className="floater-section-left">
                <FieldsSection />
            </div>
            <div div className="floater-section-right">
                <ToggleFunctions />
            </div>
        </div>
    );
}

const DefinitionTile = () => {
    return (
        <div>
            <div>Project View</div>
            <div className="header-size">Canine TD v1 2.0</div>
        </div>
    )
}

const ColoredLine = (props) => {
    const {
        color = "black",
        type = 'hr'
    } = props;
    return (
        type === 'hr' ?
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5
                }}
            />
            : <div style={{borderLeft:"1px solid #000", height:"500px"}}></div>
    )
}

const Info = () => {
    return (
        <div className="pull-apart horizontal-tile">
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Marker</span>
                        <span className="child-project-info">AGSCTD002</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Marker Type</span>
                        <span className="child-project-info">Disorder</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Category</span>
                        <span className="child-project-info">Neuromuscular</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Last updated</span>
                        <span className="child-project-info">Dec 15th, 2021</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Updated by</span>
                        <span className="child-project-info">Srinivas Udumudi (Developer)</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Created date</span>
                        <span className="child-project-info">Dec 01, 2021</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Current Status</span>
                        <span className="child-project-info">Draft</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Reviewed Date</span>
                        <span className="child-project-info">   </span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Reviewed by</span>
                        <span className="child-project-info"></span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Approved Date</span>
                        <span className-="child-project-info"></span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Reviewed by</span>
                        <span className-="child-project-info"></span>
                    </InfoTile>
                </span>
            </div>
            <button className="default-button">
                Send to Review
            </button>       
        </div>
    )
}

export default ({
    changePage,
    projectId
}) => {
    if (projectId === null || projectId === undefined) return null;
    const [view,setView] = useState(COMMENTS);
    const [active,setActive] = useState(0)
    const [data, setChangedData] = useState([])
    useEffect(() => {
        console.log([projectId])
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-content?projectId=" + projectId, setChangedData)
    }, [])
    useEffect(() => {
        console.log(data)
    }, [data])
    if (data.length !== 0) {
    console.log(data)
    return (
        <>
            <div className="pull-apart margins">
                <DefinitionTile />
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
                <button className="default-button" onClick={() => changePage(LANDING_PAGE)}>
                    Close View
                </button>
            </div>
            <ColoredLine color="black" />
            <div>
                <div className="margins">
                    <h4>
                        Canine TD v1
                    </h4>
                    <ListGroup as="ul" className="custom-list-group">
                        {groups.map((group,index) => {
                            if (active === index) {
                                return (
                                    <ListGroup.Item as="li" active className="list-item">{group}</ListGroup.Item>
                                )
                            }
                            return (
                                <ListGroup.Item as="li" onClick={() => setActive(index)} className="list-item">{group}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </div>
                <Info />
                <SpecificContent />
            </div>
        </>
    )}
    return (<div id="loader"></div>);
}