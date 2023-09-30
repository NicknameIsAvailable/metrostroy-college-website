import React, {useEffect, useState} from 'react';
import "./TeachersList.css";
import Teacher from "./Components/Teacher/Teacher";
import axios from "../../axios";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectIsAuth} from "../../Redux/Slices/auth";

const TeachersList = () => {
    const isAuth = useSelector(selectIsAuth);

    const [lessons, setLessons] = useState([]);

    const search = async (inputs, radio, location) => {
        const requestOptions = {
            valueSearch: inputs,
            valueRadioButton: radio,
            valueLocation: location
        };

        try {
            await axios.post('/schedule.php',
                requestOptions
            )
                .then(response => {
                    if(response.data !== "Запрос не получил ни одного результата!") {
                        setLessons(response.data);
                    } else {
                        search("", "", 1);
                    }
                })
        }
        catch (err) {
            alert('Произошла странная ошибка')
        }
    }
    //
    // useEffect(() => {
    //     search("", "Location", "");
    // }, []);


    const teachers = [
        {
            name: "Михаил",
            surname: "Матанов",
            email: "mmatanov@gmail.com",
            speciality: "Математика"
        },
        {
            name: "Роман",
            surname: "Русский",
            email: "rrusskiy@gmail.com",
            speciality: "Русский язык и литература"
        },
        {
            name: "Владимир",
            surname: "Литературов",
            email: "vliteraturov@gmail.com",
            speciality: "Руссикй язык и литература"
        },
        {
            name: "Харитон",
            surname: "Трамвай",
            email: "htram@gmail.com",
            speciality: "Химия"
        }
    ];

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className="container">
            <div className="teachers-list">
                <h1>Список преподавателей</h1>
                <div className="list">
                    {teachers.map(obj => <Teacher obj={obj} lessons={lessons}/>)}
                </div>
            </div>
        </div>
    );
};

export default TeachersList;