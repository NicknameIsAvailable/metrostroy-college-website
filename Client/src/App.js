import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import Schedule from "./Pages/Schedule/Schedule";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";

function App() {
  return (
    <>


        <Header/>
        <BurgerMenu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
        <Footer/>

    </>
  );
}

export default App;
