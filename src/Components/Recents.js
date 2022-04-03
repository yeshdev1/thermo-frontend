import './componentStyles.css'
import ProjectsList from './ProjectsList';
import React from 'react';

const Recents = (props) => {
    return (
        <div className="Recents">
            <div className="tile-header header-size">Most Recent Projects</div>
            <ProjectsList 
                onClickSummary={props.onClickSummary} 
                onClickContent={props.onClickContent} 
                data={props.data} 
            />
        </div>
    )
}

export default Recents;