import React from 'react';
import './flipimage.css';

const FlipImage = (props) =>{

    const { image, header, content } = props;

    return (
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img src={image} alt="Paris" />
                </div>
                <div className="flip-box-back">
                    <h2>{header}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipImage;