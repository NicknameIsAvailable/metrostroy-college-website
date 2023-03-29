import React, {useState} from 'react';
import "../Schedule/Components/Cell/Cell.css"

const CellAdmin = (props) => {
    const [obj, setObj] = useState(props.obj);
    const index = props.index;
    const teacherSearching = props.teacherSearching;
    const inputs = props.inputs;
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
                            <input
                                className="subject no-outline"
                                type="text"
                                value={obj.subjectFirst}
                            />
                    </abbr>
                </div>

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

                }
            </div>
        </tr>
    );
};

export default CellAdmin;