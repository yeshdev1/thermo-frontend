import { LANDING_PAGE, CANINE_DESCRIPTION_PAGE, PROJECT_VIEW } from "../Strings/strings"
import LandingPage from './LandingPage';
import SummaryView from "./SummaryView";
import ProjectView from "./ProjectView";
import { useState } from 'react';
import React from 'react';

const PageContent = (props) => {
    const [current,setCurrentPage] = useState(PROJECT_VIEW);
    const changePage = (currentPageName) => {
        setCurrentPage(currentPageName)
    }
    switch (current) {
        case PROJECT_VIEW:
            return (
                <>
                    <ProjectView />
                </>
            )
        case CANINE_DESCRIPTION_PAGE:
            return (
                <>
                    <SummaryView />
                </>
            )
        case LANDING_PAGE:
        default:
            return (
                <>
                    <LandingPage changePage={changePage} />
                </>
            )
    }
}

export default PageContent