import React from "react";
import Navbar from "./Navbar";
import DoctorList from "./DoctorList";

export default function Home() {
  return (
    <div className="tbl">
      <Navbar />
      <div className="container">
        <DoctorList />;
      </div>
    </div>
  );
}
