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
    const [isLoading, setIsLoading] = useState(false);

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

    const duplicates = groups.filter((number, index, numbers) => {
        console.log(number); // number - элемент массива
        console.log(index); // index - индекс элемента массива
        console.log(numbers); // numbers - представление массива values
        return numbers.indexOf(number) !== index;
    });

    console.log("дловаыджлоывалджоываджло", groups)

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
                            <div className="day-cell">
                                Понедельник
                            </div>
                        </td>
                        <td>
                            <div className="day-cell">
                                Вторник
                            </div>
                        </td>
                        <td>
                            <div className="day-cell">
                                Среда
                            </div>
                        </td>
                        <td>
                            <div className="day-cell">
                                Четверг
                            </div>
                        </td>
                        <td>
                            <div className="day-cell">
                                Пятница
                            </div>
                        </td>
                    </tr>

                        <td>
                            {monday.map(obj => <div className="cell">{obj.subject} {obj.auditory} {obj.teacher}</div>)}
                        </td>
                        <td>
                            {tuesday.map(obj => <div className="cell">{obj.subject} {obj.auditory} {obj.teacher}</div>)}
                        </td>
                        <td>
                            {wednesday.map(obj => <div className="cell">{obj.subject} {obj.auditory} {obj.teacher}</div>)}
                        </td>
                        <td>
                            {thursday.map(obj => <div className="cell">{obj.subject} {obj.auditory} {obj.teacher}</div>)}
                        </td>
                        <td>
                            {friday.map(obj => <div className="cell">{obj.subject} {obj.auditory} {obj.teacher}</div>)}
                        </td>
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