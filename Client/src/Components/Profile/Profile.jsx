import React from 'react';
import "./Profile.css";

const Profile = () => {
    return (
        <div className="Profile">
            <div className="group__number">
                <p>
                    <span className="number">29</span>
                    <br/>
                    группа
                </p>
            </div>
            <h3>Иван Иванов</h3>
        </div>
    );
};

export default Profile;