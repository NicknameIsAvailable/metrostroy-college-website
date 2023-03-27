import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import React, {useState} from "react";
import Schedule from "../Schedule/Schedule";
import ErrorPage from "../ErrorPage/ErrorPage";

const ScheduleEdit = () => {

    const [lesson, setLesson] = useState();
    const [isAdmin, setIsAdmin] = useState(true)
    const [updatedSchedule, setUpdatedSchedule] = useState();

    const updateLesson = (value) => {
        setLesson(value)
    }

    const changedValuesList = [];

    const [changedValues, setChangedValues] = useState();

    const [scheduleForAdmin, setScheduleForAdmin] = useState();

    const fastUpdateSchedule = (values, newValues) => {
        
    }

    if (isAdmin) {
        return (
            <div className="ScheduleEdit">
                <div className="admin-menu">
                    <AdminMenu
                        setUpdatedSchedule={setUpdatedSchedule}
                        updateLesson={updateLesson}
                        isAdmin={isAdmin}
                    />
                </div>
                <div className="schedule">
                    <Schedule
                        updatedSchedule={updatedSchedule}
                        setScheduleForAdmin={setScheduleForAdmin}
                        setChangedValues={setChangedValues}
                        isAdmin={isAdmin}
                        lesson={lesson}
                    />
                </div>
            </div>
        );
    } else {
        return <ErrorPage/>;
    }
};

export default ScheduleEdit;