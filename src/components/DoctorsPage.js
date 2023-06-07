import React from "react";
import Navbar from "./Navbar";
import DoctorList from "./DoctorList";

export default function Home() {
  return (
    <div className="container">
            <Navbar />
      <div className="home">
      <DoctorList />;
     </div>
    </div>
  );
}
