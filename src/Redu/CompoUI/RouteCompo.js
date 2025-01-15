import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Student } from "./Student";
import { Contact } from "./Contact";
import { EditStudent } from "./EditStudent";
import { AddStudent } from "./AddStudent";


const RouteCompo = () => {
    return (
        <div>
        <div id="navbar">
            <BrowserRouter>

        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/editstudent" element={<EditStudent />} />
                    <Route path="/addstudent" element={<AddStudent />} />
                </Routes>
            </BrowserRouter>
        </div>
        </div>
    );
}

export { RouteCompo };
