import React from 'react';
import "./TableCell.css";

const TableCell = (props) => {

    const day = props.day;
    const lessonNumber = props.lessonNumber;

    return (
        <div className="TableCell">
            <h3 className="lesson-number">{lessonNumber}</h3>
            <h3 className="lesson-title">{day.subject} </h3>
            <div className="extra-info">
                <h3>{day.secondname}</h3>
                <h3 className="auditory">{day.auditory}</h3>
            </div>
        </div>
    );
};

export default TableCell;