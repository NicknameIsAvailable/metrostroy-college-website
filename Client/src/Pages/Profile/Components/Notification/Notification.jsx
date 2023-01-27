import React from 'react';
import "./Notification.css";

const Notification = (props) => {


    return (
        <div className="Notification">
            <h3>{props.date} {props.time}</h3>
            <h2>{props.content}</h2>
        </div>
    );
};

export default Notification;