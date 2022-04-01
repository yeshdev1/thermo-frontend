import Dog from '../Images/dog.jpeg';
import React from 'react';
import { convertBase64toPdfAndOpen } from '../utils/common';


export default (props) => {
    const image = convertBase64toPdfAndOpen(props.imageData,'image/jpeg');
    return (
        <img className="Image" src={image}/>
    )
}