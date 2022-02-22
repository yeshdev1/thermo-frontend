import './componentStyles.css';
import React from 'react';

const PersonnelAssigned  = () => {
    return (
        <div className="PersonnelAssignedTile">
             <div className="header-size">Personnel Assigned</div>
             <div className="PersonnelAssignedList">
                 <span className="PersonnelAssignedContent">ADMIN</span>
                 <span>Srinivas</span>
             </div>
             <div className="PersonnelAssignedList">
                 <span className="PersonnelAssignedContent">APPROVER</span>
                 <span>Anu</span>
             </div>
             <div className="PersonnelAssignedList">
                 <span className="PersonnelAssignedContent">REVIEWER</span>
                 <span>Anu</span>
                 <span>Chaitra</span>
             </div>
             <div className="PersonnelAssignedList">
                 <span className="PersonnelAssignedContent">DEVELOPER</span>
                 <span>Vaishnavi</span>
                 <span>Chaitra</span>
             </div>
        </div>
    )
}

export default PersonnelAssigned