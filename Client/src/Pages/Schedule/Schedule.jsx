import React, {useEffect, useState} from 'react';
import "./Schedule.css";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import axios from "../../axios";
import TableRow from "./Components/TableRow/TableRow";
import TableCell from "./Components/TableCell/TableCell";
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
                setSchedule(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    // const arr = schedule.map(obj => ({
    //         groupNumber: obj.groupNumber,
    //         groupName: obj.groupName
    //     })
    // );


    console.log(schedule)

    for (let i = 0; i < schedule.length; i++) {
        console.log(schedule[i]);

    }

    const arraySchedule = schedule.map((obj, index) => ({
        groupNumber: obj.groupnumber,
        weekDay: obj.weekday,
        subject: obj.subject,
        auditory: obj.auditory,
        teacher: obj.secondname
    }));

    console.log(arraySchedule);

    const groups = arraySchedule.map(obj => [obj.groupNumber])

    console.log(groups)


    const monday = arraySchedule.filter(item => item.weekDay === "Понедельник")
    const tuesday = arraySchedule.filter(item => item.weekDay === "Вторник")
    const wednesday = arraySchedule.filter(item => item.weekDay === "Среда")
    const thursday = arraySchedule.filter(item => item.weekDay === "Четверг")
    const friday = arraySchedule.filter(item => item.weekDay === "Пятница")

    const [groupNumbers, setGroupNumbers] = useState();

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
                    <tr>
                        <td>
                            <div className="cell">
                                Понедельник
                            </div>
                        </td>
                        <td>
                            <div className="cell">
                                Вторник
                            </div>
                        </td>
                        <td>
                            <div className="cell">
                                Среда
                            </div>
                        </td>
                        <td>
                            <div className="cell">
                                Четверг
                            </div>
                        </td>
                        <td>
                            <div className="cell">
                                Пятница
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {monday.map(obj => <tr>{obj.subject} {obj.auditory} {obj.teacher}</tr>)}
                        </td>
                        <td>
                            {tuesday.map(obj => <tr>{obj.subject} {obj.auditory} {obj.teacher}</tr>)}
                        </td>
                        <td>
                            {wednesday.map(obj => <tr>{obj.subject} {obj.auditory} {obj.teacher}</tr>)}
                        </td>
                        <td>
                            {thursday.map(obj => <tr>{obj.subject} {obj.auditory} {obj.teacher}</tr>)}
                        </td>
                        <td>
                            {friday.map(obj => <tr>{obj.subject} {obj.auditory} {obj.teacher}</tr>)}
                        </td>
                    </tr>
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