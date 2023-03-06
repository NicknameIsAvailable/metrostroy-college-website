import React, {useState} from 'react';
import "./Cell.css"

const Cell = (props) => {
    const [obj, setObj] = useState(props.obj);
    const index = props.index;
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
                        lesson.address = obj.address;
                        console.log(obj, lesson)
                    }
                }}
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
                                className="subject"
                                type="text"
                                value={obj.subject}
                            />
                            :
                            <h2>
                                {obj.subject}
                            </h2>
                        }
                    </abbr>
                </div>
                <div className="extra-info">

                    {isAdmin ?
                        <input
                            className="teacher"
                            type="text"
                            value={obj.teacher}
                        />
                        :
                        obj.teacher
                    }
                    {isAdmin ?
                        <input
                            className="auditory"
                            type="text"
                            value={obj.auditory}
                        />
                        :
                        obj.auditory
                    }

                </div>
            </div>
        </tr>
    );
};

export default Cell;