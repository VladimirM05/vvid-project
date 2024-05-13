import React, { useState } from "react";
import "../clicker-buttom/ClikerButtom.scss";
import dirt1 from '../../app/images/imagineBloks/DirtBloks/Dirty1.jpg';
import dirt2 from '../../app/images/imagineBloks/DirtBloks/Dirty2.jpg';
import dirt3 from '../../app/images/imagineBloks/DirtBloks/Dirty3.jpg';
import dirt4 from '../../app/images/imagineBloks/DirtBloks/Dirty4.jpg';
import wood1 from '../../app/images/imagineBloks/WoodBloks/Wood1.jpg';
import wood2 from '../../app/images/imagineBloks/WoodBloks/Wood2.jpg';
import wood3 from '../../app/images/imagineBloks/WoodBloks/Wood3.jpg';
import wood4 from '../../app/images/imagineBloks/WoodBloks/Wood4.jpg';
import diamond1 from '../../app/images/imagineBloks/DiamondBloks/diamond1.jpg';
import diamond2 from '../../app/images/imagineBloks/DiamondBloks/diamond2.jpg';
import diamond3 from '../../app/images/imagineBloks/DiamondBloks/diamond3.jpg';
import diamond4 from '../../app/images/imagineBloks/DiamondBloks/diamond4.jpg';

const images = [
    { src: dirt1, alt: 'Image 1' },
    { src: dirt2, alt: 'Image 2' },
    { src: dirt3, alt: 'Image 3' },
    { src: dirt4, alt: 'Image 4' },
    { src: wood1, alt: 'Image 5' },
    { src: wood2, alt: 'Image 6' },
    { src: wood3, alt: 'Image 7' },
    { src: wood4, alt: 'Image 8' },
    { src: diamond1, alt: 'Image 9' },
    { src: diamond2, alt: 'Image 10' },
    { src: diamond3, alt: 'Image 11' },
    { src: diamond4, alt: 'Image 12' },
];

export const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(4);
    const [hp, setHp] = useState(12);
    const [xp, setXp] = useState(260);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const findBlok = () => {
        if (hp >= 0 && hp <= 55) {
            setXp(160);
        } else if (hp >= 56 && hp <= 80) {
            setXp(260);
        } else if (hp >= 81 && hp <= 95) {
            setXp(460);
        }
    };

    const updateProgress = () => {
        setProgress(progress + 10);
        if (xp === 160) {
            if (progress <= 40) {
                setCurrentImageIndex(0);
            } else if (progress <= 80) {
                setCurrentImageIndex(1);
            } else if (progress <= 120) {
                setCurrentImageIndex(2);
            } else if (progress <= 160) {
                setCurrentImageIndex(3);
            } else {
                resetProgress();
            }
        } else if (xp === 260) {
            if (progress <= 40) {
                setCurrentImageIndex(4);
            } else if (progress <= 100) {
                setCurrentImageIndex(5);
            } else if (progress <= 160) {
                setCurrentImageIndex(6);
            } else if (progress <= 260) {
                setCurrentImageIndex(7);
            } else {
                resetProgress();
            }
        } else if (xp === 460) {
            if (progress <= 120) {
                setCurrentImageIndex(8);
            } else if (progress <= 240) {
                setCurrentImageIndex(9);
            } else if (progress <= 350) {
                setCurrentImageIndex(10);
            } else if (progress <= 460) {
                setCurrentImageIndex(11);
            } else {
                resetProgress();
            }
        }
    }

    const resetProgress = () => {
        setProgress(0);
        setHp(randomNumberInRange(1, 100));
        findBlok();
    }

    return (
        <div class="section-1">
            <div class="container">
                <div className="clicker-button" onClick={updateProgress}>
                    <img class="clicker-button-img"
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                    />
             </div>
            </div>
        </div>  
           
    );
};