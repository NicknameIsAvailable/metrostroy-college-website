import React from 'react';
import "./Schedule.css";
import Search from "./Components/Search/Search";

const Schedule = () => {
    return (
        <div className="Schedule">
            <Search/>

            <div className="group-block">
                <p>
                    <span className="number">29</span>
                    <br/>
                    группа
                </p>
                <h2>
                    информационные системы и программирование
                </h2>
            </div>


        </div>
    );
};

export default Schedule;