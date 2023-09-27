import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Slice/Slice";

const AddStudent = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

    const [newStudent, setNewStudent] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
    }

    const handleAddStudent = () => {
        // Check if any of the fields are empty
        if (!newStudent.name || !newStudent.age || !newStudent.course || !newStudent.batch) {
            alert("Please fill out all fields.");
            return;
        }

        dispatch(addStudent(newStudent)); // Dispatch the addStudent action with the new student data
        Navi('/student');
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
            />
            <label htmlFor="age">Age</label>
            <input
                type="text"
                placeholder="Enter age"
                name="age"
                value={newStudent.age}
                onChange={handleInputChange}
            />
            <label htmlFor="course">Course</label>
            <input
                type="text"
                placeholder="Enter course"
                name="course"
                value={newStudent.course}
                onChange={handleInputChange}
            />
            <label htmlFor="batch">Batch</label>
            <input
                type="text"
                placeholder="Enter batch"
                name="batch"
                value={newStudent.batch}
                onChange={handleInputChange}
            />

            <button className="btn" onClick={handleAddStudent}>Add Student</button>
        </div>
    );
}

export { AddStudent };
