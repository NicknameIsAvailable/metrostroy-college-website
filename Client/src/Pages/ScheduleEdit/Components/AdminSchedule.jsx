import React, {useState} from 'react';
import "../../Schedule/Schedule.css";
import Search from "../../Schedule/Components/Search/Search";
import Loader from "../../../Components/Loader/Loader";
import GroupsListAdmin from "../GroupsListAdmin";

const AdminSchedule = (props) => {
    const arraySchedule = props.arraySchedule;

    const isLoading = props.isLoading;

    const [inputs, setInputs] = useState("");
    const [radioInputs, setRadioInputs] = useState("Group");
    const [locationInputs, setLocationInputs] = useState(1);

    const [teacherSearching, setTeacherSearching] = useState(false);

    const weekdays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница"
    ]

    return (
        <div className="container">
            <div className="Schedule">
                <Search
                    setInputs={setInputs}
                    inputs={inputs}
                    radioInputs={radioInputs}
                    setRadioInputs={setRadioInputs}
                    setLocationInputs={setLocationInputs}
                    locationInputs={locationInputs}
                    arraySchedule={arraySchedule}
                    setTeacherSearching={setTeacherSearching}
                />
                <Loader loading={isLoading}/>
                {isLoading ?
                    ""
                    :
                    <GroupsListAdmin
                        weekdays={weekdays}
                        inputs={inputs}
                        arraySchedule={arraySchedule}
                        teacherSearching={teacherSearching}
                    />
                }
            </div>
        </div>
    );
};

export default AdminSchedule;