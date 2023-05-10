import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhonenumberPage from "./phone-number";
import Signup from "./signup";
import Dashboard from "./dashboard";
import AdminPage from "./admin";

const Pages = () => {

    return(
        <Router>
            <Routes>
            <Route  path="/" element={<PhonenumberPage />}/>
            <Route  path="/register" element={<Signup />}/>
            <Route  path="/dashboard" element={<Dashboard />}/>
            <Route  path="/admin" element={<AdminPage />}/>
            </Routes>
        </Router>
    )
}

export default Pages;