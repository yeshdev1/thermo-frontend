import CanineInfoTile from '../Components/CanineInfoTile';
import { CANINE_DESCRIPTION_PAGE } from '../Strings/strings';
import './pageContentStyles.css';
import React from 'react';

export default (props) => {
    const {
        changePage
    } = props;
    const onClickSummary = () => {
        changePage(CANINE_DESCRIPTION_PAGE)
    }
    return (
        <div className="Container">
            <CanineInfoTile onClickSummary={onClickSummary} />
        </div>
    )
}