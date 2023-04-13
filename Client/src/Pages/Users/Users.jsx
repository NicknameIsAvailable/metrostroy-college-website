import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Users.css";
import User from "./Components/User/User";
import AutoComplete from "../../Components/AutoComplete/AutoComplete";
import DeleteModal from "./Components/DeleteModal/DeleteModal";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconWhite.svg";

const Users = () => {
    const params = useParams();

    const [users, setUsers] = useState([
        {
            name: "Алексей",
            surname: "Иванов",
            id: 123,
            role: "student",
            registrationTime: "12.12.12 22:22",
            group: 29,
            speciality: "Информационные системы и программирование"
        },
        {
            name: "Санек",
            surname: "Пивнов",
            id: 143,
            role: "teacher",
            registrationTime: "12.12.12 22:22",
            speciality: "Математика"
        },
        {
            name: "Леха",
            surname: "Пивнов",
            id: 145,
            role: "teacher",
            registrationTime: "12.12.12 22:22",
            speciality: "Математика"
        },
        {
            name: "Олег",
            surname: "Пивнов",
            id: 144,
            role: "teacher",
            registrationTime: "12.12.12 22:22",
            speciality: "Математика"
        },
        {
            name: "Диман",
            surname: "Барбусеев",
            id: 125,
            role: "applicant",
            registrationTime: "12.12.12 22:22",
        },
    ]);

    const [deleteModalInfo, setDeleteModalInfo] = useState({})
    const [input, setInput] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    return (
        <div className="users-page">

        <DeleteModal 
            isVisible={isDeleteModalOpen}
            setIsVisible={setIsDeleteModalOpen}   
            obj={deleteModalInfo}
            />

            <div className="container">
                <div className="users-header">
                    <div className="buttons">
                        <Link to="/users/teachers">
                            <button 
                                className="user-type__btn"
                                style={params.type === "teachers" ? {
                                    borderBottom: "#3D99A8 3px solid"
                                } : {}}
                            >
                                Преподаватели
                            </button>
                        </Link>

                        <Link to="/users/students">
                            <button 
                                className="user-type__btn"
                                style={params.type === "students" ? {
                                    borderBottom: "#3D99A8 3px solid"
                                } : {}}
                            >
                                Студенты
                            </button>
                        </Link>

                        <Link to="/users/applicants">
                            <button 
                                className="user-type__btn"
                                style={params.type === "applicants" ? {
                                    borderBottom: "#3D99A8 3px solid"
                                } : {}}
                            >
                                Абитуриенты
                            </button>
                        </Link>

                        <form
                            className="search-block"
                            onSubmit={e => {
                                e.preventDefault();
                                setUsers(users.filter(item => {
                                    return item.name.toString().toLowerCase().includes(input.toLowerCase())
                                        || item.surname.toString().toLowerCase().includes(input.toLowerCase())
                                        || item.id.toString().toLowerCase().includes(input.toLowerCase());
                                }))
                            }}
                        >

                            <AutoComplete
                                array={[
                                    ...users.map(item => item.id.toString()),
                                    ...users.map(item => item.name.toString()),
                                    ...users.map(item => item.surname.toString()),
                                ]}
                                value={input}
                                input={input}
                                setInput={setInput}
                            />

                            <input placeholder="поиск" className="underlined-input no-outline" type="text" value={input} onChange={e => {
                                setInput(e.target.value);
                            }}/>

                            <button type="submit" className="search-button">
                                <SearchIcon/>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="users-list">
                    {users.filter(item => item.role === params.type.substr(0, params.type.length -1)).map(obj =>
                    <User 
                        setIsDeleteModalOpen={setIsDeleteModalOpen} 
                        obj={obj}
                        setDeleteModalInfo={setDeleteModalInfo}
                        isDeleteModalOpen={isDeleteModalOpen}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default Users;