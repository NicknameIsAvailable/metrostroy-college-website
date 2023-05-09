import React from 'react';
import "./Switch.css";

const Switch = (props) => {

    return (
        <div className="switch-block">
            <span>{props.name}</span>
            <label className="switch" onChange={() => props.setValue(!props.value)}>
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
        </div>
    );
};

export default Switch;