import React, {useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const [obj, setObj] = useState(props.obj);
    const index = props.index;
    const teacherSearching = props.teacherSearching;
    const inputs = props.inputs;
    const isAdmin = props.isAdmin;
    const lesson = props.lesson;

    const [subjectShow, setSubjectShow] = useState(false);

    return (
        <tr>
            <div
                className="cell"
                onClick={() => {
                    if (lesson) {
                        setObj(lesson)
                        lesson.groupNumber = obj.groupNumber;
                        lesson.weekDay = obj.weekDay;
                        lesson.locationName = obj.locationName;
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
                                obj.time.includes("9") ? 1
                                : obj.time.includes("10") ? 2
                                : obj.time.includes("11") ? 3
                                : obj.time.includes("12") ? 4
                                : obj.time.includes("13") ? 5
                                : obj.time.includes("14") ? 6
                                : obj.time.includes("15", "05", "50") ? 7
                                : obj.time.includes("15", "55", "16", "40") ? 8
                                : ""
                            }
                        </h4>
                    </abbr>

                    <abbr title="Урок">
                        <h2
                            className="subject"
                            onClick={() => setSubjectShow(!subjectShow)}
                        >
                            {
                                subjectShow ? 
                                obj.subjectFirst 
                                : 
                                <>
                                    {obj.subjectFirst.includes("МДК") ? 
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
                            }
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