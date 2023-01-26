import React from 'react';
import "./Table.css";
import TableRow from "../TableRow/TableRow";

const Table = (props) => {
    const schedule = props.schedule;

    return (
        <div className="Table">
            <div className="group-block">
                <p>
                    <span className="number">{schedule.groupNumber}</span>
                    <br/>
                    группа
                </p>
                <h2>
                    {schedule.groupName}
                </h2>
            </div>
            {
                schedule.week.map((day, index) =>
                    <TableRow day={day} index={index}/>
                )
            }

        </div>
    );
};

export default Table;