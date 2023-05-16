// Импорт компонентов и функций из других файлов и библиотек
import Schedule from "./Schedule";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { fetchSchedule, selectSchedule } from "../../Redux/Slices/schedule";
import "./SchedulePage.css";
import axios from "../../axios";
import StrangeError from "../../Components/StrangeError/StrangeError";
import {Navigate} from "react-router-dom";
import {selectIsAuth} from "../../Redux/Slices/auth";
import {useCookies} from "react-cookie";

const SchedulePage = () => {

    // Объявление переменных состояния и функций
    const dispatch = useDispatch();
    const schedule = useSelector(selectSchedule);

    const isLoading = schedule.status === "loading";

    // Запускать функцию fetchSchedule при загрузке страницы
    useEffect(async () => {
        dispatch(fetchSchedule());
        await axios.post("/schedule.php", {withCredentials: true}).then(r => console.log(r));
    }, [dispatch]);

    // Функция поиска
    const search = async (inputs, radio, location) => {
        const requestOptions = {
            valueSearch: inputs,
            valueRadioButton: radio,
            valueLocation: location,
        };

        try {
            const response = await axios.post("/schedule.php", requestOptions);

            // Если результат не пустой - обновить состояние с расписанием, иначе выполнить поиск еще раз
            if (response.data !== "Запрос не получил ни одного результата!") {
                dispatch(fetchSchedule(response.data));
            } else {
                search("", "", 1);
            }

        } catch (err) {
            return <StrangeError/>
        }
    };

    const isAuth = useSelector(selectIsAuth);

    if (isAuth)
    return (
        <div className="schedule-page">
            {!isLoading ? (
                <Schedule schedule={schedule} search={search} />
            ) : (
                <Loader />
            )}
        </div>
    )
    else return <Navigate to="/login"/>
};

export default SchedulePage;