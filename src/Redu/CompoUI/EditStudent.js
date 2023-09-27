import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../Slice/Slice";


const EditStudent = () => {
    const index = useLocation().state.index;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Stu_Data);

    const [info, setInfo] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });

    const Navi = useNavigate();

    const handlechange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const handleClick = () => {
        dispatch(editStudent({ info, index }));
        Navi('/student');
    }

    return (
        <div className="edit-student-container">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={info.name}
                onChange={handlechange}
            />
            <label htmlFor="age">Age</label>
            <input
                type="text"
                placeholder="Enter age"
                name="age"
                value={info.age}
                onChange={handlechange}
            />
            <label htmlFor="course">Course</label>
            <input
                type="text"
                placeholder="Enter course"
                name="course"
                value={info.course}
                onChange={handlechange}
            />
            <label htmlFor="batch">Batch</label>
            <input
                type="text"
                placeholder="Enter batch"
                name="batch"
                value={info.batch}
                onChange={handlechange}
            />

            <button className="btn cancel-btn" onClick={() => Navi('/student')}>Cancel</button>
            <button className="btn update-btn" onClick={handleClick}>Update</button>
        </div>
    );
}

export { EditStudent };
