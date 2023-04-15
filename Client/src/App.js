import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Profile from "./Pages/Profile/Profile";
import "./App.css";
import ScheduleEdit from "./Pages/ScheduleEdit/ScheduleEdit";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ScheduleEditTutorial from "./Pages/ScheduleEditTutorial/ScheduleEditTutorial";
import StrangeError from "./Components/StrangeError/StrangeError";
import SchedulePage from "./Pages/Schedule/SchedulePage";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import TeachersList from "./Pages/TeachersList/TeachersList";

function App() {
  return (
    <body>
        <Header/>

        <Routes>
            <Route path="/schedule" element={<SchedulePage/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/teachers" element={<TeachersList/>}/>
            <Route path="/users/:type" element={<Users/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/strange-error" element={<StrangeError/>}/>
            <Route path="/schedule-edit/tutorial" element={<ScheduleEditTutorial/>}/>
            <Route path="/schedule-edit" element={<ScheduleEdit/>}/>
            <Route path="/" element={<Profile/>}/>
        </Routes>
        <Footer/>
    </body>
  );
}

export default App;
