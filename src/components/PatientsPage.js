import React from "react";
import "./PatientsPage.css";
import PatientList from "./patientList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function Home() {
  const navigate = useNavigate()
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
   
    getPatients();
  
}, []);

  return (
    
    <div className="home">
    <Navbar />
      <div className="container">
        {patients.map((patient) => {
          return <PatientList patient={patient}  />;
        })}
      </div>
   
    </div>
  );
}
