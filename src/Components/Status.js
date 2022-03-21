import './componentStyles.css'
import React from 'react';

const find = (arr, findType, key) => {
    return arr.findIndex(p => p[findType] === key)
}

const makeObject = (data) => {
    let productInfoObject = {}
    // disorders index finder
    let index = find(data.conditionType, "cType", "disorder")
    productInfoObject['disorders'] = index !== -1 ? data.conditionType[index]?.cCount : 0;
    
    //traits index finders
    index = find(data.conditionType, "cType", "trait")
    productInfoObject['traits'] = index !== -1 ? data.conditionType[index]?.cCount : 0;
    

    index = find(data.markerType, "mType", "SNP")
    productInfoObject["SNP"] = index !== -1 ? data.markerType[index]?.mCount : 0;

    index = find(data.markerType, "mType", "INDEL")
    productInfoObject['INDEL'] = index !== -1 ? data.markerType[index]?.mCount : 0;

    index = find(data.markerType, "mType", "CNV")
    productInfoObject['CNV'] = index !== -1 ? data.markerType[index]?.mCount : 0;

    //returning the reformed object
    return productInfoObject
}

const Status = (props) => {
    if (props.data === undefined) {
        return null;
    }
    const data = props.data;
    const productInfoObject = makeObject(data)
    return (
        <div className="Status">
            <div className="header-size">Active Product</div>
            <div className="breed">{data.name}</div>
            <div className="disorders-traits">
                <span className="features">
                    <div className="superscriptSize">{productInfoObject['disorders']}</div>
                    <div className="subscriptSize">Disorders</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">{productInfoObject['traits']}</div>
                    <div className="subscriptSize">Traits</div>
                </span>
            </div>
            <div className="disorders-traits">
                <span className="features">
                    <div className="superscriptSize">{productInfoObject["SNP"]}</div>
                    <div className="subscriptSize">SNPs</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">{productInfoObject['INDEL']}</div>
                    <div className="subscriptSize">INDELs</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">{productInfoObject['CNV']}</div>
                    <div className="subscriptSize">CNVs</div>
                </span>
            </div>
            <div className="bottomSize">
                Old version - <span style={{color:"blue"}}>{data.old_version || "None"}</span>
            </div>
        </div>
    )
}

export default Status;