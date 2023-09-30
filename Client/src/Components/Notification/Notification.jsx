import React from 'react';
import "./Notification.css";

const Notification = ({isVisible, setIsNotificationVisible, content}) => {


    if (isVisible) {
        setTimeout(() => {
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