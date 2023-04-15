import React from 'react';

const TeacherLesson = (props) => {
    const obj = props.obj;

    return (
        <div className="lesson">
            <h2>
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
                } {obj.subjectfirst}
            </h2>

            <h3>
                Группа: {obj.groupnumber}
            </h3>

            <h3>
                Аудитория: {obj.auditoryfirst || obj.auditorysecond}
            </h3>
        </div>
);
};

export default TeacherLesson;