import { useState,useEffect } from "react";
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


export default function Card() {
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
        try {
          const response = await axios.get("http://localhost:3001/doctor/all");
          console.log(response);
          setDoctors(response.data.data.doctors);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getDoctors()
      }, []);
      const [patients, setPatients] = useState([]);

      const getPatients = async () => {
          try {
            const response = await axios.get("http://localhost:3001/patient/all");
            console.log(response);
            setPatients(response.data.data.patients);
          } catch (error) {
            console.log(error);
          }
        };
        useEffect(() => {
          getPatients()
        }, []);
    return (
        <div>
            <div className="card-container">
                <div className="card doctor">
                    <div className="card-contents">
                        <FontAwesomeIcon icon={faUserDoctor} />
                        <h2>Doctor</h2>
                        <h2>{doctors.length}</h2>
                    </div>
                </div>
                <div className="card patient">
                    <div className="card-components">
                        <FontAwesomeIcon icon={faHospitalUser} />
                        <h2>Patients</h2>
                        <h2>{patients.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}