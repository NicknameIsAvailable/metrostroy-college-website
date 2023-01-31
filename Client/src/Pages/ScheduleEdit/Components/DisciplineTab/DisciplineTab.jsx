import React from 'react';
import "./DisciplineTab.css";

const DisciplineTab = (props) => {

    return (
        <div className="DisciplineTab">
            <h3 className="lesson-title">{props.lesson} </h3>
            <div className="extra-info">
                <h3>{props.teacher}</h3>
                <h3 className="auditory">{props.auditory}</h3>
            </div>
        </div>
    );
};

export default DisciplineTab;