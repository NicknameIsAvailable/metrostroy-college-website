import React from 'react';
import "./TableRow.css";
import TableCell from "../TableCell/TableCell";

const TableRow = (props) => {

    const day = props.day;
    const index = props.index;

    let dayOfWeek;

    switch (index) {
        case 0:
            dayOfWeek = "пн";
            break;
        case 1:
            dayOfWeek = "вт";
            break;
        case 2:
            dayOfWeek = "ср";
            break;
        case 3:
            dayOfWeek = "чт";
            break;
        case 4:
            dayOfWeek = "пт";
            break;
    }

    return (
        <div className="TableRow">
            <div className="day-of-week"><h3>{dayOfWeek}</h3></div>
            {day.map((day, index) =>
                <TableCell day={day} lessonNumber={index + 1} />
            )}
        </div>
    );
};

export default TableRow;