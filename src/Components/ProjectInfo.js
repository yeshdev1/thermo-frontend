import { Children } from "react";
import '../PageContent/pageContentStyles.css';
import React from 'react';

const InfoTile = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default () => {
    return (
        <div className="pull-apart">
            <div className="margins">
                <InfoTile>
                    Project Status:   Draft
                </InfoTile>
                <InfoTile>
                    Last updated:   Dec 15th, 2021
                </InfoTile>
                <InfoTile>
                    Updated by:   Srinivas Udumudi (Developer)
                </InfoTile>
                <InfoTile>
                    Created date:   Dec 01, 2021
                </InfoTile>
                <InfoTile>
                    Parent Project:   Draft
                </InfoTile>
            </div>
            <div className="margins">
                <InfoTile>
                    Total Markers:   154
                </InfoTile>
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
            <div className="margins">
                <InfoTile>
                    Approvers   Dr Anu Udumudi
                </InfoTile>
                <InfoTile>
                    Reviewers:  Dr. Chaitra Lava
                </InfoTile>
                <InfoTile>
                    Developers:   Padmaja K, Srinivas Udumudi
                </InfoTile>
            </div>
        </div>
    );
}