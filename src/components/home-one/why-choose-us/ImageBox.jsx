import React from 'react';
import './ImageBox.css';
import myImage from "../../../assets/images/services/CGS-01.png";

const ImageBox = () => {
    return (
        <div className="image-box">
            <img src={myImage} alt="Service" />
        </div>
    );
};

export default ImageBox;
