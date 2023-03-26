import React, {useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const [obj, setObj] = useState(props.obj);
    const index = props.index;
    const teacherSearching = props.teacherSearching;
    const inputs = props.inputs;
    const isAdmin = props.isAdmin;
    const lesson = props.lesson

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
                            {index + 1}
                        </h4>
                    </abbr>

                    <abbr title="Урок">
                        {isAdmin ?
                            <input
                                className="subject no-outline"
                                type="text"
                                value={obj.subjectFirst}
                            />
                            :
                            <h2
                                className="subject"
                            >
                                {obj.subjectFirst}
                            </h2>
                        }
                    </abbr>
                </div>

                {isAdmin ?
                <div className="extra-info">
                    <p>{obj.searchingTeacher}</p>
                        <input
                            className="teacher no-outline"
                            type="text"
                            value={obj.teacherFirst}
                        />

                        <input
                            className="auditory no-outline"
                            type="text"
                            value={obj.auditoryFirst}
                        />

                        <input
                            className="teacher no-outline"
                            type="text"
                            value={obj.teacherSecond}
                        />
                        <input
                            className="auditory no-outline"
                            type="text"
                            value={obj.auditorySecond}
                        />
                </div>
                    :
                    obj.subjectSecond ?
                        <div className="extra-info">
                            {isAdmin ?
                                <input
                                    className="teacher no-outline"
                                    type="text"
                                    value={obj.teacherFirst}
                                />
                                :
                                <p
                                    className="teacher"
                                >
                                    {obj.teacherFirst}
                                </p>
                            }
                            {isAdmin ?
                                <input
                                    className="auditory no-outline"
                                    type="text"
                                    value={obj.auditoryFirst}
                                />
                                :
                                <p className="auditory">
                                    {obj.auditoryFirst}
                                </p>
                            }

                            {isAdmin ?
                                <input
                                    className="teacher no-outline"
                                    type="text"
                                    value={obj.teacherSecond}
                                />
                                :
                                <p
                                    className="teacher"
                                >
                                    {obj.teacherSecond}
                                </p>
                            }
                            {isAdmin ?
                                <input
                                    className="auditory no-outline"
                                    type="text"
                                    value={obj.auditorySecond}
                                />
                                :
                                <p className="auditory">
                                    {obj.auditorySecond}
                                </p>
                            }
                        </div>
                        :
                        <div className="extra-info">
                            {isAdmin ?
                                <input
                                    className="teacher no-outline"
                                    type="text"
                                    value={obj.teacherFirst}
                                />
                                :
                                <p
                                    className="teacher"
                                >
                                    {obj.teacherFirst}
                                </p>
                            }
                            {isAdmin ?
                                <input
                                    className="auditory no-outline"
                                    type="text"
                                    value={obj.auditoryFirst}
                                />
                                :
                                <p className="auditory">
                                    {obj.auditoryFirst}
                                </p>
                            }
                        </div>
                }
            </div>
        </tr>
    );
};

export default Cell;