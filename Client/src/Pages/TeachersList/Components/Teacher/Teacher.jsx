import React, {useState} from 'react';
import "./Teacher.css";
import TeacherLesson from "../TeacherLesson/TeacherLesson";

const Teacher = (props) => {
    const obj = props.obj;
    const lessons = props.lessons;

    const filteredLessons = lessons
        .filter(item =>
            item.teacherfirst.includes(obj.surname)
            || item.teachersecond.includes(obj.surname))

    const uniqLessons = filteredLessons.map(item => item.subjectfirst)
        .reduce((a,b) => {
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
        }, [])

    const [open, setOpen] = useState(false);

    // дата и время

    const date = new Date();

    const dayNumber = date.getDay();

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];


    return (
        <div
            className="teacherTab"
            onClick={() => setOpen(!open)}
        >
            <h2>
                {obj.name} {obj.surname}
            </h2>
            <a className="email" href={"mailto:" + obj.email}>
                {obj.email}
            </a>

            <h3>{obj.speciality}</h3>

            {open ?
                <>
                    <h3>Уроки преподавателя</h3>
                    <ul className="lesson-list">
                        {uniqLessons.map(item => <ol>{item}</ol>)}
                    </ul>

                    <h3>Расписание на сегодня</h3>
                    {dayNumber !== 0 || dayNumber !== 6 ?
                        filteredLessons.filter(item => item.weekday === days[dayNumber]).map(obj => <TeacherLesson obj={obj}/>)
                        : ""
                    }
                </>
                : ""
            }


        </div>
    );
};

export default Teacher;