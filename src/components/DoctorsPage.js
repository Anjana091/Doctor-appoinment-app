import React from "react";
import Navbar from "./Navbar";
import DoctorList from "./DoctorList";

export default function DoctorPage() {
  return (
    <div className="container">
      <div className="background-wrapper"></div>
            <Navbar />
      <div className="home">
      <DoctorList />;
     </div>
    </div>
  );
}
