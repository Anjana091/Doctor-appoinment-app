import React, { useEffect, useState } from "react";
import "./DoctorList.css";
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


export default function DoctorList({ doctor }) {
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const getDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/doctor/all");
      console.log(response);
      setDoctors(response.data.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedDoctors = doctors.slice(
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
        Doctors List
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
                        Speciality
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        Qualification
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        Experience
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#060b26",
                          color: "common.white",
                        }}
                      >
                        ContactInfo
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {displayedDoctors.map((doctor) => (
                      <TableRow
                        key={doctor.doctortNo}
                        sx={{
                          "&:nth-of-type(even)": {
                            backgroundColor: "background.default",
                          },
                          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                        }}
                      >
                        <TableCell>{doctor.fullname}</TableCell>
                        <TableCell>{doctor.gender}</TableCell>
                        <TableCell>{doctor.Specialty}</TableCell>
                        <TableCell>{doctor.Qualification}</TableCell>
                        <TableCell>{doctor.Experience}</TableCell>
                        <TableCell>{doctor.ContactInfo}</TableCell>
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
          count={doctors.length}
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
          Add Doctor
        </Button>
      </div>
    </div>
  );
}