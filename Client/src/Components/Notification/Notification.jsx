import React, {useState} from 'react';
import "./Notification.css";

const Notification = ({isVisible, setIsNotificationVisible, content}) => {


    if (isVisible) {
        console.log(1)
        setTimeout(() => {
            console.log(2)
            setIsNotificationVisible(false);
        }, 3000)
    }

    return (
        <div onClick={() => setIsNotificationVisible(false)} className="Notification" style={isVisible ? {right: "12px"} : {right: "-100vw"}}>
            <h2>{content}</h2>
            <div className="notification__loading" style={isVisible ? {width: 0} : {width: "100%"}}/>
        </div>
    );
};

export default Notification;