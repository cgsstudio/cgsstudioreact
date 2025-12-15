import React from 'react';
import './ImageBox.css';
import myImage from "../../../assets/images/services/2149273739-min.jpg";

const ImageBox = () => {
    return (
        <div className="image-box">
            <img src={myImage} alt="Service" />
        </div>
    );
};

export default ImageBox;
