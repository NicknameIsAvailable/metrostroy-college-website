import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import Search from "./Components/Search/Search";
import axios from "../../axios";
import ContentLoader from "react-content-loader";

const Schedule = () => {

    const [schedule, setSchedule] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            valueSearch: "ответ1",
            valueRadioButton: "ответ2",
        };
        await axios.post('/schedule.php',
            requestOptions
        )
            .then(response => {
                setSchedule(response.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, [])

    const arraySchedule = schedule.map((obj, index) => ({
        groupNumber: obj.groupnumber,
        weekDay: obj.weekday,
        subject: obj.subject,
        auditory: obj.auditory,
        teacher: obj.secondname
    }));

    const groups = arraySchedule.map(obj => obj.groupNumber).reduce((a,b) => {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    const weekdays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница"
    ]

    return (
        <div className="Schedule">
            <Search/>

            {isLoading ?
                <ContentLoader
                    speed={2}
                    width={400}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    >

                    <rect x="0" y="64" rx="0" ry="0" width="100%" height="100%" />
                </ContentLoader>
                :

                <table>
                    {
                        groups.map((gObj, gIndex) =>
                        <tr>
                            <td className="cell">
                            <h2>
                                {gObj}
                            </h2>
                                {weekdays.map((wObj, wIndex) =>
                                    <td className="day-cell">
                                        <tr>
                                        {wObj}
                                        </tr>

                                        {arraySchedule.filter(item => item.weekDay === weekdays[wIndex]
                                            && item.groupNumber === groups[gIndex]).map((obj, index) =>
                                        <tr>
                                            <div className="cell">
                                                <h2>{obj.subject}</h2>
                                                <p>{obj.teacher}</p>
                                                <p>{obj.auditory}</p>
                                                <p>{obj.weekDay}</p>
                                                <p>{obj.groupNumber}</p>
                                                <h3>{index + 1}</h3>
                                            </div>
                                        </tr>
                                        )}
                                    </td>
                                )}
                            </td>
                        </tr>
                        )
                    }
                </table>
            }
            {/*    {arraySchedule.map((obj, index) =>*/}
            {/*        <div className="Table">*/}
            {/*            <div className="group-block">*/}
            {/*                <p>*/}
            {/*                    <span className="number">{obj.groupNumber}</span>*/}
            {/*                    <br/>*/}
            {/*                    группа*/}
            {/*                </p>*/}
            {/*                <h2>*/}
            {/*                </h2>*/}
            {/*            </div>*/}
            {/*            <TableRow day={schedule[0]}/>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ВТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>СР</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ЧТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}

            {/*            <div className="TableRow">*/}
            {/*                <div className="day-of-week"><h3>ПТ</h3></div>*/}
            {/*                /!*{obj.map((day, index) =>*!/*/}
            {/*                /!*    <TableCell day={day} lessonNumber={index + 1} />*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )} */}
        </div>
    );
};

export default Schedule;