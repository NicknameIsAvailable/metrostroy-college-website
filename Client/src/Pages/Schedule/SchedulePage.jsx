import Schedule from "./Schedule";
import { useState, useEffect } from "react";
import axios from "../../axios";
import "./SchedulePage.css";

const SchedulePage = () => {

    const [schedule, setSchedule] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                        setSchedule(response.data);
                        setIsLoading(false);
                    } else {
                        search("", "", 1);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        search("", "", 1);
    }, [])

    return (
        <div className="schedule-page">
            <Schedule 
                schedule={schedule}
                search={search}
                isLoading={isLoading}
            />
        </div>
    )
}

export default SchedulePage;