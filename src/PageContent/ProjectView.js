
import './pageContentStyles.css';
import ProjectInfo from '../Components/ProjectInfo';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { COMMENTS, WEBLINKS, ARTICLES, REVIEW } from '../Strings/strings';
import React from 'react';

const DefinitionTile = () => {
    return (
        <div>
            <div>Project View</div>
            <div className="header-size">Canine TD v1 2.0</div>
            <div>Species: Canine</div>
            <div>Product: Canine TD v1</div>
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
            <button>
                Send to Review
            </button>            
        </div>
    )
}

export default ({
    changePage
}) => {
    const [view,setView] = useState(COMMENTS);
    return (
        <>
            <div className="pull-apart margins">
                <DefinitionTile />
                <ProjectInfo />
                <button>
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
                        <ListGroup.Item as="li" active>AGSCTD002</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD006</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD010</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD011</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD012</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD002</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD006</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD010</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD011</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD012</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD002</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD006</ListGroup.Item>
                        <ListGroup.Item as="li">AGSCTD010</ListGroup.Item>
                    </ListGroup>
                </div>
                <Info />
            </div>
        </>
    )
}