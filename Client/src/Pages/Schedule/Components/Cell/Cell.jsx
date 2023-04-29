import React, {useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const [obj, setObj] = useState(props.obj);
    const inputs = props.inputs;
    const lessonAdding = props.lessonAdding;
    const updatedLessons = props.updatedLessons
    const lesson = props.lesson;

    const [subjectShow, setSubjectShow] = useState(false);

    // сокращение имен предметов

    const shortSubject = subjectShow ?
        obj.subjectFirst
        :
        <>
            {
                obj.subjectFirst.includes("МДК") ?
                obj.subjectFirst.substr(0, 10)
                :
                obj.subjectFirst.includes("Иностранный язык")
                    ?
                    "Ин. Яз."
                    :
                    obj.subjectFirst.includes("Физическая культура")
                        ?
                        "Физра"
                        :
                        obj.subjectFirst.includes("Основы безопасности жизнедеятельности")
                            ?
                            "ОБЖ"
                            :
                            obj.subjectFirst.length > 12
                                ?
                                obj.subjectFirst.substr(0, 12) + "..."
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
                        lesson.groupNumber = obj.groupNumber;
                        lesson.weekDay = obj.weekDay;
                        lesson.locationName = obj.locationName;
                        lesson.time = obj.time;
                        updatedLessons.push({
                            prev: obj,
                            new: lesson
                        })
                        setObj(lesson)
                    }
                }}
                style={obj.teacherFirst.toLowerCase().includes(inputs.toLowerCase())
                && inputs.length >= 3
                || obj.subjectFirst.toLowerCase().includes(inputs.toLowerCase())
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