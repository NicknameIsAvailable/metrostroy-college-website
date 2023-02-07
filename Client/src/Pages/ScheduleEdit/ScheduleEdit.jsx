import React, {useState} from 'react';
import "./ScheduleEdit.css";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import axios from "axios";
import AdminMenu from "./Components/AdminMenu/AdminMenu";

const ScheduleEdit = () => {

    const schedule = [
        {
            groupNumber: 27,
            groupName: "Информационные системы и программирование",
            week: [
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
            ]
        },
        {
            groupNumber: 28,
            groupName: "Информационные системы и программирование",
            week: [
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
            ]
        },
        {
            groupNumber: 29,
            groupName: "Информационные системы и программирование",
            week: [
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Разработка программных модулей",
                        teacher: "Соловьев Д.В.",
                        auditory: "48"
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
                [
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "",
                        teacher: "",
                        auditory: ""
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Правовое обеспечение профессиональной деятельности",
                        teacher: "Сергиец Л.А.",
                        auditory: 37
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Дискретная математика с элементами математической логики",
                        teacher: "Сотникова Н.С.",
                        auditory: 23
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                    {
                        lesson: "Основы алгоритмизации и программирования",
                        teacher: "Рудаков В.А.",
                        auditory: 49
                    },
                ],
            ]
        },
    ]

    return (
        <div className="ScheduleEdit">
            <AdminMenu/>

            <div>
            <Search/>
            {schedule.map((schedule, index) =>
                <Table schedule={schedule} index={index}/>
            )}
            </div>
        </div>
    );
};

export default ScheduleEdit;