import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Schedule from "./Pages/Schedule/Schedule";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Profile from "./Pages/Profile/Profile";
import "./App.css";
import ScheduleEdit from "./Pages/ScheduleEdit/ScheduleEdit";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ScheduleEditTutorial from "./Pages/ScheduleEditTutorial/ScheduleEditTutorial";

function ScoreSheet() {
    return null;
}

function App() {
  return (
    <body>
        <Header/>
        <Routes>
            <Route path="/" element={<Schedule/>}/>
            <Route path="/score-sheet" element={<ScoreSheet/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/schedule-edit/tutorial" element={<ScheduleEditTutorial/>}/>
            <Route path="/schedule-edit" element={<ScheduleEdit/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
    </body>
  );
}

export default App;
