import React, { useState, useEffect } from 'react';
import './AddPatient.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';


export default function AddPatient({ onClose }) {
    const [patient, setPatient] = useState({
        PatientNo: "",
        fullname: "",
        age: "",
        gender: "",
    });

    const navigate = useNavigate();

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
            onClose(); // Close the modal
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
           <div className="background-wrapper"></div> 
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
                            onChange={handleChangeHandler}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            value={patient.fullname}
                            onChange={handleChangeHandler}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={patient.age}
                            onChange={handleChangeHandler}
                        />
                    </div>
                    <div className="form-grp">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="gender"
                                value={patient.gender}
                                onChange={handleChangeHandler}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="form-grp">
                        <button type="submit" id="pt-submit">Add patient</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
