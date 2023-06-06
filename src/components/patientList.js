import React, { useEffect, useState } from "react";
import "./patientList.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from "axios";

export default function PatientList({ patient}) {
  const [patients, setPatients] = useState([]);
  const getPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3001/patient/all");
      console.log(response);
      setPatients(response.data.data.patients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   
    getPatients();
  
}, []);
  return (
    <div className="Table">
       <TableContainer component={Paper} sx={{ marginTop: 0, borderRadius: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Age</TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {patients.map((patient) => (
            <TableRow key={patient.PatientNo} sx={{ '&:nth-of-type(even)': { backgroundColor: 'background.default' }, '&:hover': { backgroundColor: 'action.hover' } }}>
              <TableCell>{patient.fullname}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
