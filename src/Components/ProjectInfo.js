import { Children } from "react";
import '../PageContent/pageContentStyles.css';
import React from 'react';

const InfoTile = ({children}) => {
    return (
        <div className="pull-down small-margins">
            {children}
        </div>
    )
}

export default () => {
    return (
        <div className="pull-apart">
            <div className="margins tile">
                <div className="pull-apart">
                    <span>
                        <InfoTile>
                            <span className="parent-project-info">Project Status</span><span className="child-project-info">Draft</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Project Status</span><span className="child-project-info">Dec 15th, 2021</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Product Panel</span><span className="child-project-info">Canine TD v2</span>
                        </InfoTile>
                    </span>
                    <span>
                        <InfoTile>
                            <span className="parent-project-info">Updated by</span><span className="child-project-info">Srinivas Udumudi (Developer)</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Created date</span><span className="child-project-info">Dec 01, 2021</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Parent Project</span><span className="child-project-info">Draft</span>
                        </InfoTile>
                    </span>
                </div>
            </div>
            <div className="margins tile">
                <InfoTile>
                    Ready to Publish:   100
                </InfoTile>
                <InfoTile>
                    In Approval:   20
                </InfoTile>
                <InfoTile>
                    In Review:   20
                </InfoTile>
                <InfoTile>
                    In Draft:   14
                </InfoTile>
            </div>
            <div className="margins tile">
                <InfoTile>
                    <span className="parent-project-info">Approvers</span><span className="child-project-info">Dr Anu Udumudi</span>
                </InfoTile>
                <InfoTile>
                    <span className="parent-project-info">Reviewers</span><span className="child-project-info">Dr. Chaitra Lava</span>
                </InfoTile>
                <InfoTile>
                    <span className="parent-project-info">Developers</span><span className="child-project-info">Padmaja K, Srinivas Udumudi</span>
                </InfoTile>
            </div>
        </div>
    );
}