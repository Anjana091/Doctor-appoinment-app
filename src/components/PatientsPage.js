import React from "react";
import "./PatientsPage.css";
import Navbar from "./Navbar";
import PatientList from "./patientList";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <PatientList />;
      </div>
    </div>
  );
}
