import { LANDING_PAGE, CANINE_DESCRIPTION_PAGE, PROJECT_VIEW } from "../Strings/strings"
import LandingPage from './LandingPage';
import SummaryView from "./SummaryView";
import ProjectView from "./ProjectView";
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const PageContent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <LandingPage />
                }
            />
            <Route
                path="/content/:projectId"
                element={
                    <ProjectView />
                }
            />
            <Route
                path="/summary/:projectId"
                element={
                    <SummaryView />
                }
            />
        </Routes>
    )
}

export default PageContent