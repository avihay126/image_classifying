import React, { useState } from 'react';

const CameraButton = ({image, setImage}) => {


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className={"selfie-container"}>

            <button font={"landing-page-button-font"} onClick={() => document.getElementById('camera-input').click()}>
                TAKE A SELFIE
            </button>
            <input
                id="camera-input"
                type="file"
                accept="image/*"
                capture="camera"
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            {image && (
                <img
                    id={"selfie-image"}
                    src={image}
                    alt="Captured"
                />
            )}

            {
                image && (
                    <button font={"landing-page-button-font"}>SEND</button>
                )
            }
        </div>
    );
};

export default CameraButton;
