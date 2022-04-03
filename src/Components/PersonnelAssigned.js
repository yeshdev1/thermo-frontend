import './componentStyles.css';
import React from 'react';

const RenderName = ({
    type,
    list
}) => {
    return(
        <div className="PersonnelAssignedList">
            <span className="PersonnelAssignedContent">{type}</span>
            {list.map(name => (
                    <>
                        <span>{name.split(" ")[0].toLowerCase()}</span>
                    </>
                )
            )}
        </div>
    )
}

const PersonnelAssigned  = ({
    adminList,
    approverList,
    developerList,
    reviewerList
}) => {
    return (
        <div className="PersonnelAssignedTile">
             <div className="tile-header header-size">Personnel Assigned</div>
             <RenderName
                type="ADMIN"
                list={adminList}
             />
             <RenderName
                type="APPROVER"
                list={approverList}
             />
             <RenderName
                type="DEVELOPER"
                list={developerList}
             />
            <RenderName
                type="REVIEWER"
                list={reviewerList}
             />
        </div>
    )
}

export default PersonnelAssigned