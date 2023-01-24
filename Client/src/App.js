import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
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

function App() {
  return (
    <>


        <Header/>
        <BurgerMenu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
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
