import React from "react";
import "./patientList.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function PatientList({ patient}) {
  
  return (
    <div className="Table">
       <TableContainer component={Paper} sx={{ marginTop: 3, borderRadius: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Table sx={{ minWidth: 1000 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Age</TableCell>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.main', color: 'common.white' }}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={patient.id} sx={{ '&:nth-of-type(even)': { backgroundColor: 'background.default' }, '&:hover': { backgroundColor: 'action.hover' } }}>
              <TableCell>{patient.fullname}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
