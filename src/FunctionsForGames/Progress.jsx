import React, { useState } from "react";
import "../components/clicker-buttom/ClikerButtom.scss";
import dirty1 from '../app/images/imagineBloks/DirtBloks/Dirty1.jpg';
import dirty2 from '../app/images/imagineBloks/DirtBloks/Dirty2.jpg';
import dirty3 from '../app/images/imagineBloks/DirtBloks/Dirty3.jpg';
import dirty4 from '../app/images/imagineBloks/DirtBloks/Dirty4.jpg';

const images = [
    { src: dirty1, alt: 'Image 1' },
    { src: dirty2, alt: 'Image 2' },
    { src: dirty3, alt: 'Image 3' },
    { src: dirty4, alt: 'Image 4' },
];

export const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleButtonClick = () => {
        setProgress(progress + 10);
        Collapse();
    };

    const Collapse = () => {
        if (progress <= 40) {
            setCurrentImageIndex(0);
        } else if (progress <= 80) {
            setCurrentImageIndex(1);
        } else if (progress <= 120) {
            setCurrentImageIndex(2);
        } else if (progress <= 160) {
            setCurrentImageIndex(3);
        } else {
            setProgress(0);
            setCurrentImageIndex(0);
        }
        return;
    };

    return (
        <div class="section-1">
            <div class="container">
                <div className="clicker-button" onClick={handleButtonClick}>
                    <img class="clicker-button-img"
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                    />
             </div>
            </div>
        </div>  
           
    );
};