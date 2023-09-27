import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../Slice/Slice";

const EditStudent = () => {
    const index = useLocation().state.index;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Stu_Data);

    // Local state to temporarily store edited values
    const [editedInfo, setEditedInfo] = useState(data[index]);

    useEffect(() => {
        setEditedInfo(data[index]); // Update local state when index changes
    }, [index, data]);

    const Navi = useNavigate();

    const handlechange = (e) => {
        setEditedInfo({
            ...editedInfo,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = () => {
        dispatch(editStudent({ info: editedInfo, index }));
        Navi('/student');
    }

    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                placeholder="enter name"
                name="name"
                value={editedInfo.name}
                onChange={handlechange}
            />
            <label htmlFor="age">Age</label>
            <input
                placeholder="enter age"
                name="age"
                value={editedInfo.age}
                onChange={handlechange}
            />
            <label htmlFor="course">Course</label>
            <input
                placeholder="enter course"
                name="course"
                value={editedInfo.course}
                onChange={handlechange}
            />
            <label htmlFor="">Batch</label>
            <input
                placeholder="enter batch"
                name="batch"
                value={editedInfo.batch}
                onChange={handlechange}
            />

            <button className="btn" onClick={() => Navi('/student')}>Cancel</button>
            <button className="btn" onClick={handleClick}>update</button>
        </>
    );
}

export { EditStudent };
