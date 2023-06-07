import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import "./PatientList.css";

export default function PatientList({ patient }) {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedPatients = patients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return (
    <div className="Table">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4"
          component="h2"
          gutterBottom
          mt={2}
          style={{ fontWeight: "bold", marginBottom: "10px", color: "#060b26" }}>
        Patients List
        </Typography>
        <div style={{ overflowX: "auto", width: "100%" }}>
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px 10%",
            }}
          >
            <TableContainer component={Paper}>
              <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        Age
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        Gender
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {displayedPatients.map((patient) => (
                      <TableRow
                        key={patient.PatientNo}
                        sx={{
                          "&:nth-of-type(even)": {
                            backgroundColor: "background.default",
                          },
                          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                        }}
                      >
                        <TableCell>{patient.fullname}</TableCell>
                        <TableCell>{patient.age}</TableCell>
                        <TableCell>{patient.gender}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </TableContainer>
          </Box>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={patients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Add Patient
        </Button>
      </div>
    </div>
  );
}
