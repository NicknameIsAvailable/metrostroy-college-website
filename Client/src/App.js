import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Schedule from "./Pages/Schedule/Schedule";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";
import ForStudents from "./Pages/ForStudents/ForStudents";
import AutoSchool from "./Pages/AutoSchool/AutoSchool";
import Info from "./Pages/Info/Info";
import Workshops from "./Pages/Workshops/Workshops";
import Mentoring from "./Pages/Mentoring/Mentoring";
import EducationalWork from "./Pages/EducationalWork/EducationalWork";
import Profile from "./Pages/Profile/Profile";
import Teachers from "./Pages/Teachers/Teachers";
import ForApplicants from "./Pages/ForApplicants/ForApplicants";
import "./App.css";
import Login from "./Pages/Login/Login";
import ScheduleEdit from "./Pages/ScheduleEdit/ScheduleEdit";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import axios from "./axios";


function App() {

  // const baseUrl = `http://localhost/MetrostroyCollege/`;
  //
  // useEffect(() => {
  //     loadData()
  // }, [])
  //
  // const loadData = () => {
  //     fetch(`${baseUrl}/`)
  //     .then(r => console.log(r.data))
  // }

    axios.get('/index.php').then((response) => {
        console.log(response.data);
    });

  return (
    <body>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/schedule/edit" element={<ScheduleEdit/>}/>
            <Route path="/for-applicants" element={<ForApplicants/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/for-students" element={<ForStudents/>}/>
            <Route path="/auto-school" element={<AutoSchool/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/workshops" element={<Workshops/>}/>
            <Route path="/methodical-work" element={<AutoSchool/>}/>
            <Route path="/mentoring" element={<Mentoring/>}/>
            <Route path="/educational-work" element={<EducationalWork/>}/>
        </Routes>
        </div>
        <Footer/>
    </body>
  );
}

export default App;
