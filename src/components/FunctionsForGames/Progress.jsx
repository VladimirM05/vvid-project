import React, { useState } from "react";
import { Howl } from 'howler';
import "../clicker-buttom/ClikerButtom.scss";

import Sdirt1 from '../../app/sounds/DirtSound/Dirt1.wav';
import Sdirt2 from '../../app/sounds/DirtSound/Dirt2.wav';
import Sdirt3 from '../../app/sounds/DirtSound/Dirt2.wav';
import Sdirt4 from '../../app/sounds/DirtSound/Dirt4.wav';

import dirt1 from '../../app/images/imagineBloks/DirtBloks/Dirty1.jpg';     
import dirt2 from '../../app/images/imagineBloks/DirtBloks/Dirty2.jpg';
import dirt3 from '../../app/images/imagineBloks/DirtBloks/Dirty3.jpg';
import dirt4 from '../../app/images/imagineBloks/DirtBloks/Dirty4.jpg';
import wood1 from '../../app/images/imagineBloks/WoodBloks/Wood1.jpg';
import wood2 from '../../app/images/imagineBloks/WoodBloks/Wood2.jpg';
import wood3 from '../../app/images/imagineBloks/WoodBloks/Wood3.jpg';
import wood4 from '../../app/images/imagineBloks/WoodBloks/Wood4.jpg';
import stone1 from '../../app/images/imagineBloks/StoneBloks/Stone1.jpg';
import stone2 from '../../app/images/imagineBloks/StoneBloks/Stone2.jpg';
import stone3 from '../../app/images/imagineBloks/StoneBloks/Stone3.jpg';
import stone4 from '../../app/images/imagineBloks/StoneBloks/Stone4.jpg';
import diamond1 from '../../app/images/imagineBloks/DiamondBloks/diamond1.jpg';
import diamond2 from '../../app/images/imagineBloks/DiamondBloks/diamond2.jpg';
import diamond3 from '../../app/images/imagineBloks/DiamondBloks/diamond3.jpg';
import diamond4 from '../../app/images/imagineBloks/DiamondBloks/diamond4.jpg';

const soundEffects = [
    { src: Sdirt1, alt: 'Sound 1' },
    { src: Sdirt2, alt: 'Sound 2' },
    { src: Sdirt3, alt: 'Sound 3' },
    { src: Sdirt4, alt: 'Sound 4' },
].map(sound => new Howl({ src: [sound.src] }));

const images = [
    { src: dirt1, alt: 'Image 1' },
    { src: dirt2, alt: 'Image 2' },
    { src: dirt3, alt: 'Image 3' },
    { src: dirt4, alt: 'Image 4' },
    { src: wood1, alt: 'Image 5' },
    { src: wood2, alt: 'Image 6' },
    { src: wood3, alt: 'Image 7' },
    { src: wood4, alt: 'Image 8' },
    { src: stone1, alt: 'Image 9' },
    { src: stone2, alt: 'Image 10' },
    { src: stone3, alt: 'Image 11' },
    { src: stone4, alt: 'Image 12' },
    { src: diamond1, alt: 'Image 13' },
    { src: diamond2, alt: 'Image 14' },
    { src: diamond3, alt: 'Image 15' },
    { src: diamond4, alt: 'Image 16' },
];

export const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(4);
    const [hp, setHp] = useState(12);
    const [xp, setXp] = useState(260);

    const playSound = (index) => {
        soundEffects[index].play();
    };

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const findBlok = () => {
        if (hp >= 0 && hp <= 44) {
            setXp(160);
        } else if (hp >= 45 && hp <= 73) {
            setXp(260);
        } else if (hp >= 74 && hp <= 90) {
            setXp(460);
        }
        else if (hp >= 91 && hp <= 99) {
            setXp(800);
        }
    };

    const updateProgress = () => {
        setProgress(progress + 10);
        if (xp === 160) {
            if (progress <= 40) {
                setCurrentImageIndex(0);
                playSound(0);
            } else if (progress <= 80) {
                setCurrentImageIndex(1);
                playSound(1);
            } else if (progress <= 120) {
                setCurrentImageIndex(2);
                playSound(2);
            } else if (progress <= 160) {
                setCurrentImageIndex(3);
                playSound(3);
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
        else if (xp === 800) {
            if (progress <= 240) {
                setCurrentImageIndex(12);
            } else if (progress <= 400) {
                setCurrentImageIndex(13);
            } else if (progress <= 600) {
                setCurrentImageIndex(14);
            } else if (progress <= 800) {
                setCurrentImageIndex(15);
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