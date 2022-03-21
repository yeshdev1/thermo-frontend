import { LANDING_PAGE, CANINE_DESCRIPTION_PAGE, PROJECT_VIEW } from "../Strings/strings"
import LandingPage from './LandingPage';
import SummaryView from "./SummaryView";
import ProjectView from "./ProjectView";
import { useState } from 'react';
import React from 'react';

const PageContent = ({
    currentPage,
    setCurrentPage
}) => {
    const [projectId,setProjectId] = useState(-1)
    const changePage = (currentPageName, ...details) => {
        setProjectId(details[0])
        setCurrentPage(currentPageName)
    }
    switch (currentPage) {
        case PROJECT_VIEW:
            return (
                <>
                    <ProjectView
                        changePage={changePage}
                        projectId={projectId}
                    />
                </>
            )
        case CANINE_DESCRIPTION_PAGE:
            return (
                <>
                    <SummaryView
                        changePage={changePage}
                        projectId={projectId}
                    />
                </>
            )
        case LANDING_PAGE:
        default:
            return (
                <>
                    <LandingPage
                        changePage={changePage}
                    />
                </>
            )
    }
}

export default PageContent