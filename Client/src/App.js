import React, {useEffect} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import StrangeError from './Components/StrangeError/StrangeError'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

import AdminPanel from './Pages/AdminPanel/AdminPanel'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import SchedulePage from './Pages/Schedule/SchedulePage'
import ScheduleEdit from './Pages/ScheduleEdit/ScheduleEdit'
import ScheduleEditTutorial from './Pages/ScheduleEditTutorial/ScheduleEditTutorial'
import Users from './Pages/Users/Users'
import Locations from "./Pages/ Locations/Locations";

function App() {
    const userData = window.localStorage.getItem('userData')

    useEffect(() => {
        if (!userData) {
            return <Navigate to='/login'/>
        }
    }, [])

    return (<
            div className='App'>
            <Header/>
            <Routes>
                <Route path='/'
                       element={< Profile/>}/>
                <Route path='/admin' element={<AdminPanel/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/schedule' element={<SchedulePage/>}/>
                { /* <Route path="/teachers" element={<TeachersList />} /> */}
                <Route path='/users/:type' element={<Users/>}/>
                <Route path='/schedule-edit/tutorial' element={<ScheduleEditTutorial/>}/>
                <Route path='/schedule-edit' element={<ScheduleEdit/>}/>
                <Route path='/locations' element={<Locations/>}/>
                <Route path='/error' element={<StrangeError/>}/>
                <Route path='/*' element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App