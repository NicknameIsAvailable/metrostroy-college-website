import React from 'react';
import "./Slider.css";

const Slider = () => {

    const sliderPages = [
        {
            text: "Лучшие мастерские в городе",
            buttonText: "Подробнее",
            img: "../../../../Images/геопространственные технологии.png"
        },
        {
            text: "Автошкола",
            buttonText: "Подробнее",
            img: "../../../../Images/геопространственные технологии.png"
        },
        {
            text: "\"Молодые профессионалы\" WorldSkills Russia",
            buttonText: "Учавствовать",
            img: "../../../../Images/геопространственные технологии.png"
        },
    ]

    return (
        <div className="Slider">
            <div className="hero-section">
                <h1>{sliderPages[2].text.toUpperCase()}</h1>
                <button>{sliderPages[2].buttonText}</button>
            </div>
            <div className="image-block">
                <div className="moved-out-border"/>
                <div
                    className="img"
                    style={{
                        backgroundImage: `${sliderPages[2].img}`
                    }}
                    href={sliderPages[2].img}/>
            </div>
        </div>
    );
};

export default Slider;