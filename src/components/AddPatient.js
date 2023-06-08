import React, { useState, useEffect } from 'react';
import './AddPatient.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function AddPatient() {
    const [patient, setPatient] = useState({
        PatientNo: "",
        fullname: "",
        age: "",
        gender: "",
    });

    const navigate = useNavigate()



    const handleChangeHandler = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("http://localhost:3001/patient/register", patient);
            console.log(res);
            alert(res.data.message);
            navigate("/patientlist");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(patient);
    }, [patient]);

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} className="patient-form">
                <div className="form-box">

                    <h2>Add patient</h2>

                    <div className="form-grp">
                        <label>patient ID:</label>
                        <input
                            type="number"
                            name="PatientNo"
                            value={patient.PatientNo}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            value={patient.fullname}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={patient.age}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp" >
                        <label >Gender:</label>
                        <select
                            name="gender"
                            value={patient.gender}
                            onChange={(e) => handleChangeHandler(e)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-grp">
                        <button type="submit" id="pt-submit">Add patient</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

