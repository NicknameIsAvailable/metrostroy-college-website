// Импорт компонентов и функций из других файлов и библиотек
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Components/Loader/Loader'
import StrangeError from '../../Components/StrangeError/StrangeError'
import {selectIsAuth} from '../../Redux/Slices/auth'
import {fetchSchedule, selectSchedule} from '../../Redux/Slices/schedule'
import axios from '../../axios'
import Schedule from './Schedule'
import './SchedulePage.css'

const SchedulePage = () => {
    // Объявление переменных состояния и функций
    const dispatch = useDispatch()
    const schedule = useSelector(selectSchedule)

    const isLoading = schedule.status === 'loading'

    // Функция поиска
    const search = async (inputs, radio, location) => {
        const requestOptions = {
            valueSearch: inputs, valueRadioButton: radio, valueLocation: location,
        }

        try {
            const response = await axios.post('/schedule.php', requestOptions)

            // Если результат не пустой - обновить состояние с расписанием, иначе выполнить поиск еще раз
            if (response.data !== 'Запрос не получил ни одного результата!') {
                return dispatch(fetchSchedule(response.data))
            } else {
                search('', '', 1)
            }
        } catch (err) {
            return <StrangeError/>
                }
                }

                const isAuth = useSelector(selectIsAuth)

                useEffect(() => {search('', '', 1).then(() => console.log('fdsf'))}, [])

                try {return ( <div className='schedule-page'> {!isLoading ? ( <Schedule schedule = {schedule}
                search={search}/>
        ) :
            (<Loader/>)
        } </div>
        )
        } catch (e) {
            console.log(e)
        }
        }

        export default SchedulePage