import React from "react";
import "./home.css";
import PatientList from "./patientList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({} ) {
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
      <div className="container">
        {patients.map((patient) => {
          return <PatientList patient={patient}  />;
        })}
      </div>
    </div>
  );
}
