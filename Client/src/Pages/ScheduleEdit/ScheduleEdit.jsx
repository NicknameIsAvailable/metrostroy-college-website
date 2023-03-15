import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import {useState} from "react";
import Schedule from "../Schedule/Schedule";
import ErrorPage from "../ErrorPage/ErrorPage";

const ScheduleEdit = () => {

    const [lesson, setLesson] = useState();
    const [isAdmin, setIsAdmin] = useState(true)
    const [updatedSchedule, setUpdatedSchedule] = useState();

    const updateLesson = (value) => {
        setLesson(value)
    }

    if (isAdmin) {
        return (
            <div className="ScheduleEdit">
                <AdminMenu
                    setUpdatedSchedule={setUpdatedSchedule}
                    updateLesson={updateLesson}
                    isAdmin={isAdmin}
                />
                <Schedule
                    upsatedSchedule={updatedSchedule}
                    isAdmin={isAdmin}
                    lesson={lesson}
                />
            </div>
        );
    } else {
        return <ErrorPage/>;
    }
};

export default ScheduleEdit;