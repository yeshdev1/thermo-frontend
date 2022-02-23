
import './pageContentStyles.css';
import ProjectInfo from '../Components/ProjectInfo';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { COMMENTS, WEBLINKS, ARTICLES, REVIEW, LANDING_PAGE } from '../Strings/strings';
import React from 'react';
import { InfoTile } from '../Components/ProjectInfo';

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
    changePage
}) => {
    const [view,setView] = useState(COMMENTS);
    const [active,setActive] = useState(0)
    return (
        <>
            <div className="pull-apart margins">
                <DefinitionTile />
                <ProjectInfo />
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
            </div>
        </>
    )
}