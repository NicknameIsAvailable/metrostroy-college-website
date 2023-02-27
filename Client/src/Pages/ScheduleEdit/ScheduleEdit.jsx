import "./ScheduleEdit.css";
import Schedule from "../Schedule/Schedule";
import AdminMenu from "./Components/AdminMenu/AdminMenu";

const ScheduleEdit = () => {
    return (
        <div className="ScheduleEdit">
            <AdminMenu/>
            <div className="schedule">
                <Schedule/>
            </div>
        </div>
    );
};

export default ScheduleEdit;