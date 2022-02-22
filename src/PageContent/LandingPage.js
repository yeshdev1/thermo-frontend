import CanineInfoTile from '../Components/CanineInfoTile';
import { CANINE_DESCRIPTION_PAGE, PROJECT_VIEW } from '../Strings/strings';
import './pageContentStyles.css';
import React from 'react';

export default (props) => {
    const {
        changePage
    } = props;
    const onClickSummary = () => {
        console.log(CANINE_DESCRIPTION_PAGE)
        changePage(CANINE_DESCRIPTION_PAGE)
    }
    const onClickContent = () => {
        console.log(PROJECT_VIEW)
        changePage(PROJECT_VIEW)
    }
    return (
        <div className="Container">
            <CanineInfoTile onClickSummary={onClickSummary} onClickContent={onClickContent} />
        </div>
    )
}