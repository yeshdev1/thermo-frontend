
import './pageContentStyles.css';
import ProjectInfo from '../Components/ProjectInfo';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { COMMENTS, WEBLINKS, ARTICLES, REVIEW, LANDING_PAGE } from '../Strings/strings';
import React from 'react';

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
        <div className="pull-apart">
            <div className="pull-apart">
                <div className="pull-down margins">
                    <div>
                        AGSCTD002
                    </div>
                    <div>
                        Marker Type: Disorder
                    </div>
                    <div>
                        Category: Neuromuscular
                    </div>
                </div>
                <div className="pull-down margins">
                    <div>
                        Last updated:  Dec 15th, 2021
                    </div>
                    <div>
                        Updated by:  Srinivas Udumudi (Developer)
                    </div>
                    <div>
                        Created date: Dec 01, 2021
                    </div>
                    <div>
                        Current Status:  Draft
                    </div>
                </div>
                <div className="pull-down margins">
                    <div>
                        Reviewed Date:             
                    </div>
                    <div>
                        Reviewed by:           
                    </div>
                    <div>
                        Approved Date:         
                    </div>
                    <div>
                        Approved by:      
                    </div>
                </div>
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