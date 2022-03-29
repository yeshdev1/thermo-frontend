import CanineInfoTile from '../Components/CanineInfoTile';
import { CANINE_DESCRIPTION_PAGE, PROJECT_VIEW } from '../Strings/strings';
import './pageContentStyles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const onClickSummary = (projectId) => {
        navigate('/summary/' + projectId);
    }
    const onClickContent = (projectId) => {
        navigate('/content/' + projectId);
    }
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 1234");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3001');
        myHeaders.append('Access-Control-Allow-Credentials', 'true');

        fetch("http://202.153.40.2:9500/MCDS/mcds/API/dashboard", {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => setData(result.data))
        .catch(error => console.log('error', error));
    }, [])
    return (
        <div className="Container">
            <CanineInfoTile
                onClickSummary={onClickSummary}
                onClickContent={onClickContent}
                products={data}
            />
        </div>
    )
}