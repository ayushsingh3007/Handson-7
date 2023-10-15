import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


const Student = () => {
    const data = useSelector((state) => state.Stu_Data);
    const Navi = useNavigate();

    return (
        <div>
            <button className="add-button" onClick={() => Navi('/addstudent')}>Add New Student</button>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><NavLink className="edit-link" to="/editstudent" state={{ index }}>Edit</NavLink></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export {Student};
