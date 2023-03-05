import "./ScheduleEdit.css";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import {useState} from "react";
import Schedule from "../Schedule/Schedule";
import ErrorPage from "../ErrorPage/ErrorPage";

const ScheduleEdit = () => {

    const [lesson, setLesson] = useState();
    const [isAdmin, setIsAdmin] = useState(true)

    const updateLesson = (value) => {
        setLesson(value)
        console.log(lesson, value);
    }

    if (isAdmin) {
        return (
            <div className="ScheduleEdit">
                <AdminMenu
                    updateLesson={updateLesson}
                    isAdmin={isAdmin}
                />
                <Schedule
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