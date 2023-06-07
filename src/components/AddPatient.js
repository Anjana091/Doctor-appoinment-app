import React, { useState,useEffect} from 'react';
import './AddPatient.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AddPatient() {
    const [patient, setPatient] = useState({
        fullname: "",
        age: "",
        gender: "",
        PatientNo: "",
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
            const res = await axios.post("http://localhost:3001/patient/register",patient);
            console.log(res);
            alert(res.data.message);
            navigate("/patientlist")
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
                            type="text"
                            name="patientNo"
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
                        <label>Speciality:</label>
                        <input
                            type="text"
                            name="Age"
                            value={patient.age}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label >Qualification:</label>
                        <input
                            type="text"
                            name="Gender"
                            value={patient.gender}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <button type="submit" id="pt-submit">Add patient</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

