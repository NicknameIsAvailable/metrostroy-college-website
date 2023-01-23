import React from 'react';
import "./Slider.css";
import img from "../../Images/геопространственные технологии.png"

const Slider = () => {
    return (
        <div className="Slider">
            <div className="hero-section">
                <h1>ЛУЧШИЕ МАСТЕРСКИЕ В ГОРОДЕ</h1>
                <button>Подробнее</button>
            </div>
            <img src={img} alt="геопространственные технологии"/>
        </div>
    );
};

export default Slider;