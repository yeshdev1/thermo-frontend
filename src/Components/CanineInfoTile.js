import './componentStyles.css';
import ImageTile from './ImageTile';
import Status from './Status';
import Recents from './Recents';
import PersonnelAssigned from './PersonnelAssigned';
import React from 'react';

function CanineInfoTile (props) {
    const {
        products
    } = props;

    const renderTiles = (products) => {
        return products.map(product => {
            const activeProductData = product?.activeProduct || {}
            const mostRecentProjectsData = product?.mostRecentProjects || []
            const imageData = product?.imageData || "";
            return (
                <>
                    <ImageTile
                        imageData={imageData}
                        img={product?.imagePath || ""}
                    />
                    <Status data={activeProductData} productId={product?.productId || null} />
                    <Recents onClickSummary={props.onClickSummary} onClickContent={props.onClickContent} productId={product?.productId || null} data={mostRecentProjectsData} />
                    <PersonnelAssigned
                        adminList={product.teamData.adminList}
                        approverList={product.teamData.approverList}
                        reviewerList={product.teamData.reviewerList}
                        developerList={product.teamData.developerList}
                    />
                </>
            )
        })
    }

    return (
        <>
            <div className="Tile">
                <div className="Content">
                    {renderTiles(products)}
                </div>
            </div>
        </>
    )
}

export default CanineInfoTile;