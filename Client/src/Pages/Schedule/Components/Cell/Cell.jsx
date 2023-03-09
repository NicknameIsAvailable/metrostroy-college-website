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
                                className="subject no-outline"
                                type="text"
                                value={obj.subject}
                            />
                            :
                            <h2
                                className="subject"
                            >
                                {obj.subject}
                            </h2>
                        }
                    </abbr>
                </div>
                <div className="extra-info">

                    {isAdmin ?
                        <input
                            className="teacher no-outline"
                            type="text"
                            value={obj.teacher}
                        />
                        :
                        <p
                            className="teacher"
                        >
                            {obj.teacher}
                        </p>
                    }
                    {isAdmin ?
                        <input
                            className="auditory no-outline"
                            type="text"
                            value={obj.auditory}
                        />
                        :
                        <p className="auditory">
                            {obj.auditory}
                        </p>
                    }

                </div>
            </div>
        </tr>
    );
};

export default Cell;