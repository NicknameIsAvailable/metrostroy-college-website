import React, {useEffect, useState} from 'react';
import Cell from "../Cell/Cell";
import "./GroupsList.css";

const GroupsList = (props) => {
    const fromCsv = props.fromCsv;
    const groups = props.groups;
    const weekdays = props.weekdays;
    const teacherSearching = props.teacherSearching;
    const arraySchedule = props.arraySchedule;
    const inputs = props.inputs;
    const isAdmin = props.isAdmin;
    const lesson = props.lesson;
    const lessonAdding = props.lessonAdding;
    const updatedLessons = props.updatedLessons;
    const setUpdatedLessons = props.setUpdatedLessons;
    const [group, setGroup] = useState(groups?.map(gObj => weekdays.map(wObj => {arraySchedule.filter(item => item.weekDay === wObj
        && item.groupNumber === gObj)})));

    useEffect(() => {
        setGroup([])
        let array = groups?.map(gObj => weekdays.map(wObj => {arraySchedule.filter(item => item.weekDay === wObj
                && item.groupNumber === gObj)}))
        setGroup(array)
    }, [arraySchedule])
    console.log(23, group)

    return (
        <div className="groups-list">
            {groups?.map(gObj =>
            gObj ?
                <div className="group-block">
                    <h1>
                        ГРУППА <span id="gObj">{gObj}</span>
                    </h1>
                    <table>
                        <td>
                            {weekdays.map(wObj =>

                                {
                                    const group = (arraySchedule.filter(item => item.weekDay === wObj
                                        && item.groupNumber === gObj))

                                return (
                                <td>
                                    <tr>
                                        <h2 className="day-cell">{wObj}</h2>
                                    </tr>
                                    {group.map((obj, index) =>
                                        <Cell
                                            fromCsv={fromCsv}
                                            prevLessons={props.prevLessons}
                                            newLessons={props.newLessons}
                                            setPrevLessons={props.setPrevLessons}
                                            setNewLessons={props.setNewLessons}
                                            lessonAdding={lessonAdding}
                                            setUpdatedLessons={setUpdatedLessons}
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