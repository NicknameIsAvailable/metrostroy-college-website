import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./Users.css";
import User from "./Components/User/User";
import AutoComplete from "../../Components/AutoComplete/AutoComplete";
import DeleteModal from "./Components/DeleteModal/DeleteModal";
import {ReactComponent as SearchIcon} from "../../Icons/SearchIconBlack.svg";
import CreateUserModal from "./Components/CreateUserModal/CreateUserModal";

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
            name: "Админ",
            surname: "Админов",
            id: 1,
            role: "admin",
            registrationTime: "12.12.12 22:22",
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
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <div className="users-page">
            <div className="container">
                <CreateUserModal
                    isVisible={isCreateModalOpen}
                    setIsVisible={setIsCreateModalOpen}
                />

                <DeleteModal
                    isVisible={isDeleteModalOpen}
                    setIsVisible={setIsDeleteModalOpen}
                    obj={deleteModalInfo}
                />

                <div className="users-header">
                    <div className="container">
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
                            <Link to="/users/admins">
                                <button
                                    className="user-type__btn"
                                    style={params.type === "admins" ? {
                                        borderBottom: "#3D99A8 3px solid"
                                    } : {}}
                                >
                                    Админы
                                </button>
                            </Link>
                        </div>

                        <form
                            className="search-block"
                            onSubmit={e => {
                                e.preventDefault();
                                setIsAutoCompleteVisible(false)
                                setFilteredUsers(users.filter(item => {
                                    return item.name.toString().toLowerCase().includes(input.toLowerCase())
                                        || item.surname.toString().toLowerCase().includes(input.toLowerCase())
                                        || item.id.toString().toLowerCase().includes(input.toLowerCase());
                                }))
                            }}
                        >
                            <AutoComplete
                                isVisible={isAutoCompleteVisible}
                                array={[
                                    ...users.map(item => item.id.toString()),
                                    ...users.map(item => item.name.toString()),
                                    ...users.map(item => item.surname.toString()),
                                ].filter(item => {
                                    return item.toLowerCase().includes(input.toLowerCase());
                                })}
                                value={input}
                                setInput={setInput}
                            />

                            <input
                                placeholder="поиск"
                                className="search underlined-input no-outline" type="text" value={input}
                                onChange={e => {
                                    setInput(e.target.value);
                                    if (input !== "") {
                                        setIsAutoCompleteVisible(true)
                                    } else {
                                        setIsAutoCompleteVisible(false)
                                    }
                                }}/>

                            <button type="submit" className="button__no-outline">
                                <SearchIcon/>
                            </button>

                            <button
                                className="modal-button"
                                onClick={() => setIsCreateModalOpen(true)}
                            >
                                <h3>
                                    Создать нового пользователя
                                </h3>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="users-list">
                        {filteredUsers.filter(item => item.role === params.type.substr(0, params.type.length - 1)).map(obj =>
                            <User
                                setIsDeleteModalOpen={setIsDeleteModalOpen}
                                obj={obj}
                                setDeleteModalInfo={setDeleteModalInfo}
                                isDeleteModalOpen={isDeleteModalOpen}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;