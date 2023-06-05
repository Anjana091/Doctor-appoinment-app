import React from "react";
import "./patientList.css";
// import axios from "axios";

export default function PatientList({ patient}) {

  return (
    <div className="card">
      <div className="contents">
        <h2>{patient.fullname}</h2>
        <h4>RollNo : {patient.age}</h4>
        <h4>Gender : {patient.gender}</h4> <br />
      </div>
     
    </div>
  );
}
