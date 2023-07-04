import React, { useState,useEffect} from 'react';
import './AddDoctor.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { message } from 'antd';




export default function AddDoctor() {
    const [doctor, setDoctor] = useState({
        doctorNo: "",
        fullname: "",
        Gender: "",
        Specialty: "",
        Qualification: "",
        Experience: "",
        ContactInfo: "",
        Fees:"",
        tokenPerDay:""
    });

    const navigate = useNavigate()



    const handleChangeHandler = (e) => {
        setDoctor({
          ...doctor,
          [e.target.name]: e.target.value,
        });
      };
    

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("http://localhost:3001/doctor/register",doctor);
            console.log(res);
            message.success(res.data.message);
            navigate("/doctorlist")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(doctor);
    }, [doctor]);

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} className="doctor-form">
                <div className="form-box">

                    <h2>Add Doctor</h2>

                    <div className="form-grp">
                        <label>Doctor ID:</label>
                        <input
                            type="text"
                            name="doctorNo"
                            value={doctor.doctorNo}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            value={doctor.fullname}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-label="Gender"
                                name="Gender"
                                value={doctor.Gender}
                                onChange={handleChangeHandler}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="form-grp">
                        <label>Speciality:</label>
                        <input
                            type="text"
                            name="Specialty"
                            value={doctor.Specialty}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label >Qualification:</label>
                        <input
                            type="text"
                            name="Qualification"
                            value={doctor.Qualification}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label >Experience:</label>
                        <input
                            type="text"
                            name="Experience"
                            value={doctor.Experience}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Contact Info:</label>
                        <input
                            type="text"
                            name="ContactInfo"
                            value={doctor.ContactInfo}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>fees per consultation:</label>
                        <input
                            type="number"
                            name="fees"
                            value={doctor.fees}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <label>Tokens Per Day</label>
                        <input
                            type="number"
                            name="tokenPerDay"
                            value={doctor.tokenPerDay}
                            onChange={(e) => handleChangeHandler(e)}
                        />
                    </div>
                    <div className="form-grp">
                        <button type="submit" id="doc-submit">Add Doctor</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

