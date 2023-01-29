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
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://metrostroy-college/index.php");
            setData(result.data);
        };

        fetchData().then(response => console.log(response));
    }, []);

    console.log(data);

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
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
        <Footer/>

    </>
  );
}

export default App;
