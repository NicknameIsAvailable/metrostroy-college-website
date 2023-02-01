import React, {useState} from 'react';
import "./Schedule.css";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import axios from "axios";

const Schedule = () => {

    // const [data, setData] = useState()

    // axios.get("/dfsd").then(({data}) => setData(data));

    const schedule = [
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
        <div className="Schedule">
            <Search/>
            {schedule.map((schedule, index) =>
                <Table schedule={schedule} index={index}/>
            )}
        </div>
    );
};

export default Schedule;