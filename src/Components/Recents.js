import { propTypes } from 'react-bootstrap/esm/Image';
import './componentStyles.css'
import ProjectsList from './ProjectsList';
import React from 'react';

const Recents = (props) => {
    return (
        <div className="Recents">
            <div className="header-size">Most Recent Projects</div>
            <ProjectsList onClickSummary={props.onClickSummary} />
        </div>
    )
}

export default Recents;