import React, {useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const [obj, setObj] = useState(props.obj);
    const teacherSearching = props.teacherSearching;
    const inputs = props.inputs;
    const lessonAdding = props.lessonAdding;
    const updatedLessons = props.updatedLessons
    const isAdmin = props.isAdmin;
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
                        console.log("obj", obj)
                        console.log("lesson", lesson)
                        console.log("updatedLessons", updatedLessons)
                    }
                }}
                style={obj.teacherFirst === inputs && teacherSearching ?
                    {background: "#3D99A8", color: "white"}
                    :
                    {background: "white", color: "#1f1f1f"}}
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

                    {
                        !isAdmin ?
                            <abbr title="Урок">
                                <h2
                                    className="subject"
                                    onClick={() => setSubjectShow(!subjectShow)}
                                >
                                    {shortSubject}
                                </h2>
                            </abbr>
                            :
                            <abbr title="Урок">
                                <input
                                    className="subject"
                                    onClick={() => setSubjectShow(!subjectShow)}
                                    value={obj.subjectFirst}
                                />
                            </abbr>
                    }

                </div>

                {!isAdmin ? obj.subjectSecond ?
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
                    :
                        <div className="extra-info">
                            <input
                                className="teacher"
                                value={obj.teacherFirst}
                            />
                            <input
                                className="auditory"
                                value={obj.auditoryFirst}
                            />

                            <input
                                className="teacher"
                                value={obj.teacherSecond}
                            />

                            <input
                                className="auditory"
                                value={obj.auditorySecond}
                            />
                        </div>
                }
            </div>
        </tr>
    );
};

export default Cell;