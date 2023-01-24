import React from 'react';
import "./Image.css";

const Image = (props) => {


    return (
        <>
            <img src={props.img} alt={props.img}/>
            <div className="movedOutBorder"/>
            <div/>
        </>
    );
};

export default Image;