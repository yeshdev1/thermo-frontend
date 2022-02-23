import { Children } from "react";
import '../PageContent/pageContentStyles.css';
import React from 'react';
import Progress from '../Images/progress.png';

export const InfoTile = ({children}) => {
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
                <div className="child-project-info">
                    Project Status
                </div>
                <div className="pull-apart">
                    <img className="Image" src={Progress}/>
                    <div>
                        <InfoTile>
                            <span className="parent-project-info">
                                Ready to Publish:   100
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Approval:   20
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Review:   20
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Draft:   14
                            </span>
                        </InfoTile>
                    </div>
                </div>
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