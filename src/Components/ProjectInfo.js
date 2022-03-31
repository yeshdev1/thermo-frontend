import '../PageContent/pageContentStyles.css';
import React from 'react';

export const InfoTile = ({children}) => {
    return (
        <div className="pull-down small-margins">
            {children}
        </div>
    )
}

export default ({
    projectStatus="",
    lastUpdated="",
    createdDate="",
    updatedBy="",
    productPanel="",
    parentProject="",
    teamData={},
    statusData={}
}) => {
    return (
        <div className="pull-apart">
            <div className="margins tile">
                <div className="pull-apart">
                    <span>
                        <InfoTile>
                            <span className="parent-project-info">Project Status</span><span className="child-project-info">{projectStatus}</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Last Updated</span><span className="child-project-info">{lastUpdated.split(/(\s+)/)[0]}</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Product Panel</span><span className="child-project-info">{productPanel}</span>
                        </InfoTile>
                    </span>
                    <span>
                        <InfoTile>
                            <span className="parent-project-info">Updated by</span><span className="child-project-info">{updatedBy}</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Created date</span><span className="child-project-info">{createdDate.split(/(\s+)/)[0]}</span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">Parent Project</span><span className="child-project-info">{parentProject}</span>
                        </InfoTile>
                    </span>
                </div>
            </div>
            <div className="margins tile">
                <div className="child-project-info">
                    Project Status
                </div>
                <div className="pull-apart">
                    {/* <img className="Image" src={Progress}/> */}
                    <div>
                        <InfoTile>
                            <span className="parent-project-info">
                                Ready to Publish:   {statusData.readyToPublish}
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Approval:   {statusData.inApproval}
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Review:   {statusData.inReview}
                            </span>
                        </InfoTile>
                        <InfoTile>
                            <span className="parent-project-info">
                                In Draft:   {statusData.inDevelopment}
                            </span>
                        </InfoTile>
                    </div>
                </div>
            </div>
            <div className="margins tile">
                <InfoTile>
                    <span className="parent-project-info">Approvers</span><span className="child-project-info">{teamData !== undefined? teamData.approverList.join(', ') : ""}</span>
                </InfoTile>
                <InfoTile>
                    <span className="parent-project-info">Reviewers</span><span className="child-project-info">{teamData !== undefined? teamData.reviewerList.join(', ') : ""}</span>
                </InfoTile>
                <InfoTile>
                    <span className="parent-project-info">Developers</span><span className="child-project-info">{teamData !== undefined? teamData.developerList.join(', ') : ""}</span>
                </InfoTile>
            </div>
        </div>
    );
}