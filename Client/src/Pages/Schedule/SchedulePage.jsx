// Импорт компонентов и функций из других файлов и библиотек
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StrangeError from '../../Components/StrangeError/StrangeError'
import {selectIsAuth} from '../../Redux/Slices/auth'
import axios from '../../axios'
import Schedule from './Schedule'
import './SchedulePage.css'

const SchedulePage = () => {
    // Объявление переменных состояния и функций
    const [schedule, setSchedule] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getLocation = async () => {
        const data = await axios.post("/selectListLocations.php")
        return data.data.locations[0].id
    }

    // Функция поиска
    const search = async (location) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/schedule.php?id=${location}`)

            // Если результат не пустой - обновить состояние с расписанием, иначе выполнить поиск еще раз
            if (response.data !== 'Запрос не получил ни одного результата!') {
                const data = response.data;
                setSchedule(data);
                setIsLoading(false);
            } else {
                search(1)
            }
        } catch (err) {
            setIsLoading(false);
            return <StrangeError/>
        }
    }

    const firstSearch = async () => {
        const id = await getLocation()
        search(id)
    }

    useEffect(() => {
        firstSearch()
    }, [])

    try {
        return (
            <div className='schedule-page'>
                <Schedule schedule={schedule} isLoading={isLoading} search={search}/>
            </div>
        )
    } catch (e) {
        console.log(e)
    }
}

export default SchedulePage