import './componentStyles.css';
import ImageTile from './ImageTile';
import Status from './Status';
import Recents from './Recents';
import PersonnelAssigned from './PersonnelAssigned';
import React from 'react';

function CanineInfoTile (props) {
    return (
        <>
            <div className="Tile">
                <div className="Content">
                    <ImageTile />
                    <Status />
                    <Recents onClickSummary={props.onClickSummary}/>
                    <PersonnelAssigned />
                </div>
            </div>
        </>
    )
}

export default CanineInfoTile;