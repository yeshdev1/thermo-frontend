import React from 'react';
import { convertBase64toPdfAndOpen } from '../utils/common';

export default (props) => {
    const imgSplit = props.img.split('.');
    const imgType = imgSplit[imgSplit.length - 1];
    const image = convertBase64toPdfAndOpen(props.imageData,'image/'+imgType);
    return (
        <img className="Image" src={image}/>
    )
}