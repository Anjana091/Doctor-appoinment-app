import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import "./components/Login.css";
import DoctorsPage from "./components/DoctorsPage"
import PatientsPage from "./components/PatientsPage";
import AddDoctor from "./components/AddDoctor";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patientlist" element={<PatientsPage />} />
          <Route path="/doctorlist" element={<DoctorsPage />} />
          <Route path="/doctorlist/add-doctor" element={<AddDoctor />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
