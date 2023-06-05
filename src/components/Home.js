import React from "react";
import "./home.css";
import PatientList from "./patientList";
import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function Home({} ) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('token')){
         navigate('/')
  }
}, []);

  return (
    <div>
    <Navbar />
      <button
      onClick={ ()=>{
       localStorage.removeItem('token')
       navigate('/')
      }} >Log Out</button>
    </div>
  );
}
