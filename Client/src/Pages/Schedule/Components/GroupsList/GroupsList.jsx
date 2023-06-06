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
    const lessonAdding = props.lessonAdding;
    const updatedLessons = props.updatedLessons;

    return (
        <div className="groups-list">
            {groups?.map((gObj, gIndex) =>
            gObj ?
                <div className="group-block">
                    <h1>
                        ГРУППА <span id="gObj">{gObj}</span>
                    </h1>
                    <table>
                        <td>
                            {weekdays.map((wObj, wIndex) =>

                                {
                                const group = arraySchedule.filter(item => item.weekDay === weekdays[wIndex]
                                        && item.groupNumber === groups[gIndex]);
                                                                                
                                return (          
                                <td>
                                    <tr>
                                        <h2 className="day-cell">{wObj}</h2>
                                    </tr>
                                    {group.map((obj, index) =>
                                        <Cell
                                            lessonAdding={lessonAdding}
                                            updatedLessons={updatedLessons}
                                            obj={obj}
                                            inputs={inputs}
                                            teacherSearching={teacherSearching}
                                            index={index}
                                            isAdmin={isAdmin}
                                            lesson={lesson}
                                        />
                                    )}
                                </td>
                                )
                                }
                            )}
                        </td>
                    </table>
                </div>
                : 
                ""
            )}
        </div>
    );
};

export default GroupsList;