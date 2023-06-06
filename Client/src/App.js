import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import StrangeError from "./Components/StrangeError/StrangeError";

import Profile from "./Pages/Profile/Profile";
import SchedulePage from "./Pages/Schedule/SchedulePage";
import TeachersList from "./Pages/TeachersList/TeachersList";
import ScheduleEdit from "./Pages/ScheduleEdit/ScheduleEdit";
import ScheduleEditTutorial from "./Pages/ScheduleEditTutorial/ScheduleEditTutorial";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/teachers" element={<TeachersList />} />
                <Route path="/users/:type" element={<Users />} />
                <Route path="/schedule-edit/tutorial" element={<ScheduleEditTutorial />} />
                <Route path="/schedule-edit" element={<ScheduleEdit />} />
                <Route path="/error" element={<StrangeError />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;