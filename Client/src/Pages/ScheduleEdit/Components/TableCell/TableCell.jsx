import React, {useState} from 'react';
import "./TableCell.css";

const TableCell = (props) => {
    const day = props.day;
    const lessonNumber = props.lessonNumber;

    const [auditoryValue, setAuditoryValue] = useState(day.auditory);
    const [lessonValue, setLessonValue] = useState(day.lesson);
    const [teacherValue, setTeacherValue] = useState(day.teacher);

    return (
        <div className="TableCell">
            <h3 className="lesson-number">{lessonNumber}</h3>
            <textarea
                className="lesson-title-input"
                type="text"
                value={lessonValue}
            />

            <div className="extra-info">
                    <textarea
                        type="text"
                        className="teacher-input"
                        value={teacherValue}
                    />

                    <textarea
                        className="auditory-input"
                        type="text"
                        value={auditoryValue}/>
            </div>
        </div>
    );
};

export default TableCell;