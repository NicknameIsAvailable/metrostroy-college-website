import React from 'react';
import Cell from "../Cell/Cell";
import "./GroupsList.css";

const GroupsList = (props) => {
    const groups = props.groups;
    const weekdays = props.weekdays;
    const teacherSearching = props.teacherSearching;
    const arraySchedule = props.arraySchedule;
    const inputs = props.inputs;
    const isAdmin = props.isAdmin;
    const lesson = props.lesson;

    return (
        <div className="groups-list">
            {groups?.map((gObj, gIndex) =>
                <div className="group-block">
                    <h2>
                        Группа {gObj}
                    </h2>
                    <table>
                        <td>
                            {weekdays.map((wObj, wIndex) =>
                                <td>
                                    <tr>
                                        <h3 className="day-cell">{wObj}</h3>
                                    </tr>
                                    {arraySchedule.filter(item => item.weekDay === weekdays[wIndex]
                                        && item.groupNumber === groups[gIndex]).map((obj, index) =>
                                        <Cell
                                            obj={obj}
                                            inputs={inputs}
                                            teacherSearching={teacherSearching}
                                            index={index}
                                            isAdmin={isAdmin}
                                            lesson={lesson}
                                        />
                                    )}
                                </td>
                            )}
                        </td>
                    </table>
                </div>
            )}
        </div>
    );
};

export default GroupsList;