import './componentStyles.css'
import React from 'react';

const Status = () => {
    return (
        <div className="Status">
            <div className="header-size">Active Product</div>
            <div className="breed">Canine TD v2</div>
            <div className="disorders-traits">
                <span className="features">
                    <div className="superscriptSize">16</div>
                    <div className="subscriptSize">Disorders</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">18</div>
                    <div className="subscriptSize">Traits</div>
                </span>
            </div>
            <div className="disorders-traits">
                <span className="features">
                    <div className="superscriptSize">120</div>
                    <div className="subscriptSize">SNPs</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">32</div>
                    <div className="subscriptSize">INDELs</div>
                </span>
                <span className="features">
                    <div className="superscriptSize">0</div>
                    <div className="subscriptSize">CNVs</div>
                </span>
            </div>
            <div className="bottomSize">
                Old version - <span style={{color:"blue"}}>Canine TD v1</span>
            </div>
        </div>
    )
}

export default Status;