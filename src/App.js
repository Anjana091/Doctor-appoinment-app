import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import './components/Login.css';
import './components/login-image.jpg';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element ={<Register/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
