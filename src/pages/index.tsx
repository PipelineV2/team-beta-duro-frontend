import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhonenumberPage from "./phone-number";
import Signup from "./signup";

const Pages = () => {

    return(
        <Router>
            <Routes>
            <Route  path="/" element={<PhonenumberPage />}/>
            <Route  path="/register" element={<Signup />}/>
            </Routes>
        </Router>
    )
}

export default Pages;