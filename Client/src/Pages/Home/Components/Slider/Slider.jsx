import React from 'react';
import "./Slider.css";
import Image from "../../../../Components/Image/Image";
import img from "../../../../Images/геопространственные технологии.png"

const Slider = () => {
    return (
        <div className="Slider">
            <div className="hero-section">
                <h1>ЛУЧШИЕ МАСТЕРСКИЕ В ГОРОДЕ</h1>
                <button>Подробнее</button>
            </div>
            <Image img={img}/>
        </div>
    );
};

export default Slider;