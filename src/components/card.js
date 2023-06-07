import { useState, useEffect } from "react";
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Card() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  const getDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/doctor/all");
      console.log(response);
      setDoctors(response.data.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

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
    getDoctors();
    getPatients();
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Number of Patients:</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>
                <h2 className="card__count">{patients.length}</h2>
              </li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <FontAwesomeIcon icon={faHospitalUser} className="card__icon" />
              <h2 className="card__title">Patients</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Number of Doctors:</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>
                <h2 className="card__count">{doctors.length}</h2>
              </li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <FontAwesomeIcon icon={faUserDoctor} className="card__icon" />
              <h2 className="card__title">Doctor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
