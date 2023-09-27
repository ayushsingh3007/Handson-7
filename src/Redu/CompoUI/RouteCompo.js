import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Student } from "./Student";
import { Contact } from "./Contact";
import { EditStudent } from "./EditStudent";
import { AddStudent } from "./AddStudent";


const RouteCompo = () => {
    return (
        <>
            <BrowserRouter>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/student">Student</NavLink>
                <NavLink className="nav-link" to="contact">Contact</NavLink>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/editstudent" element={<EditStudent />} />
                    <Route path="/addstudent" element={<AddStudent />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export { RouteCompo };
