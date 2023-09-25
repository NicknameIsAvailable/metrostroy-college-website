import React, {useEffect, useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const fromCsv = props.fromCsv;
    const [obj, setObj] = useState(props.obj);
    const inputs = props.inputs;
    const lessonAdding = props.lessonAdding;
    const updatedLessons = props.updatedLessons
    const setUpdatedLessons = props.setUpdatedLessons;
    const setNewLessons = props.setNewLessons;
    const newLessons = props.newLessons;
    const setPrevLessons = props.setPrevLessons;
    const prevLessons = props.prevLessons;
    const lesson = props.lesson;

    const [subjectShow, setSubjectShow] = useState(false);

    useEffect(() => {
        setObj(props.obj)
    }, [props.obj])

    // сокращение имен предметов

    const shortSubject = subjectShow && obj.subjectFirst ?
        obj.subjectFirst
        :
        <>
            {
                obj.subjectFirst?.includes("МДК") ?
                obj.subjectFirst?.substr(0, 10)
                :
                obj.subjectFirst?.includes("Иностранный язык")
                    ?
                    "Иностранный язык"
                    :
                    obj.subjectFirst?.includes("Физическая культура")
                        ?
                        "Физическая культура"
                        :
                        obj.subjectFirst?.includes("Основы безопасности жизнедеятельности")
                            ?
                            "ОБЖ"
                            :
                            obj.subjectFirst?.length > 12
                                ?
                                obj.subjectFirst?.substr(0, 12) + "..."
                                :
                                obj.subjectFirst
            }
        </>


    return (
        <tr>
            <div
                className="cell"
                onClick={() => {
                    if (lessonAdding) {

                        setPrevLessons(prevLessons => [obj, ...prevLessons]);
                        setNewLessons(newLessons => [{
                            groupNumber: obj.groupNumber,
                            time: obj.time,
                            weekDay: obj.weekDay,
                            subjectFirst: lesson.subjectFirst,
                            teacherFirst: lesson.teacherFirst,
                            auditoryFirst: lesson.auditoryFirst,
                            subjectSecond: lesson.subjectSecond,
                            teacherSecond: lesson.teacherSecond,
                            auditorySecond: lesson.auditorySecond,
                            locationName: obj.locationName,
                        }, ...newLessons]);

                        setUpdatedLessons({
                            fromCsv: fromCsv,
                            new: newLessons,
                            prev: prevLessons
                        })

                        console.log(updatedLessons);
                        setObj({
                            groupNumber: obj.groupNumber,
                            time: obj.time,
                            weekDay: obj.weekDay,
                            subjectFirst: lesson.subjectFirst,
                            teacherFirst: lesson.teacherFirst,
                            auditoryFirst: lesson.auditoryFirst,
                            subjectSecond: lesson.subjectSecond,
                            teacherSecond: lesson.teacherSecond,
                            auditorySecond: lesson.auditorySecond,
                            locationName: obj.locationName,
                        })
                    }
                }}
                style={obj.teacherFirst?.toLowerCase().includes(inputs.toLowerCase())
                && inputs.length >= 3
                || obj.subjectFirst?.toLowerCase().includes(inputs.toLowerCase())
                && inputs.length >= 3 ?
                    {

                } : inputs.length < 3 ? {

                }
                    :
                {
                    filter: "opacity(0.5)"
                }}
            >
                <div className="main-info">
                    <abbr title="Номер урока">
                        <h4>
                            {
                                obj.time.includes("9:00") ? 1
                                : obj.time.includes("10:00") ? 2
                                : obj.time.includes("11:00") ? 3
                                : obj.time.includes("12:00") ? 4
                                : obj.time.includes("13:05") ? 5
                                : obj.time.includes("14:10") ? 6
                                : obj.time.includes("15:05") ? 7
                                : obj.time.includes("15:55") ? 8
                                : ""
                            }
                        </h4>
                    </abbr>

                    <abbr title="Урок">
                        <h2
                        className="subject"
                        onClick={() => setSubjectShow(!subjectShow)}
                        >
                            {shortSubject}
                        </h2>
                    </abbr>

                </div>

                {obj.subjectSecond ?
                        <div className="extra-info">
                            <p
                                className="teacher"
                            >
                                {obj.teacherFirst}
                            </p>
                            <p className="auditory">
                                {obj.auditoryFirst}
                            </p>
                            <p
                                className="teacher"
                            >
                                {obj.teacherSecond}
                            </p>
                            <p className="auditory">
                                {obj.auditorySecond}
                            </p>
                        </div>
                        :
                        <div className="extra-info">
                            <p
                                className="teacher"
                            >
                                {obj.teacherFirst}
                            </p>

                            <p className="auditory">
                                {obj.auditoryFirst}
                            </p>
                        </div>
                }
            </div>
        </tr>
    );
};

export default Cell;