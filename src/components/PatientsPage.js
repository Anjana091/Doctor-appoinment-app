import React from "react";
import Navbar from "./Navbar";
import PatientList from "./patientList";

export default function Home() {
  return (
    <div className="container">
      <div className="background-wrapper"></div>
            <Navbar />
      <div className="home">
      <PatientList />;
     </div>
    </div>
  );
}
