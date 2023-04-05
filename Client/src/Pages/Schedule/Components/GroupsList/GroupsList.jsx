import React from 'react';
import Cell from "../Cell/Cell";
import { useState } from 'react';
import "./GroupsList.css";

const GroupsList = (props) => {
    const groups = props.groups;
    const weekdays = props.weekdays;
    const teacherSearching = props.teacherSearching;
    const arraySchedule = props.arraySchedule;
    const inputs = props.inputs;
    const isAdmin = props.isAdmin;
    const lesson = props.lesson;

    const time = arraySchedule.map(item => item.time).reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    const timeArray = [
        time.find(item => item.includes("9:00")),
        time.find(item => item.includes("10:00")),
        time.find(item => item.includes("11:00")),
        time.find(item => item.includes("12:00")),
        time.find(item => item.includes("13:05")),
        time.find(item => item.includes("14:10")),
        time.find(item => item.includes("15:05")),
        time.find(item => item.includes("15:50")),
        time.find(item => item.includes("15:55")),
    ]

    return (
        <div className="groups-list">
            {groups?.map((gObj, gIndex) =>
            gObj ?
                <div className="group-block">
                    <h2>
                        Группа {gObj}
                    </h2>
                    <table>
                        <td>
                            {weekdays.map((wObj, wIndex) =>

                                {
                                const group = arraySchedule.filter(item => item.weekDay === weekdays[wIndex]
                                        && item.groupNumber === groups[gIndex]);
                                                                                
                                return (          
                                <td>
                                    <tr>
                                        <h3 className="day-cell">{wObj}</h3>
                                    </tr>
                                    {group.map((obj, index) =>
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