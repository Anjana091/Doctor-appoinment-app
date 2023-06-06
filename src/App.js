import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import "./components/Login.css";
import "./components/login-image.jpg";
import DoctorList from "./components/DoctorList";
import PatientsPage from "./components/PatientsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patientlist" element={<PatientsPage />} />
          <Route path="/doctorlist" element={<DoctorList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
