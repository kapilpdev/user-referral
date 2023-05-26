import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axiosInstance from "../api";
import Header from './Header';
// import { AxiosResponse } from "axios";

const rows = [
  { email: "jhonWick@gmail.com" },
  { email: "jhonWick@gmail.com" },
  { email: "jhonWick@gmail.com" },
  { email: "jhonWick@gmail.com" },
  { email: "jhonWick@gmail.com" },
  { email: "jhonWick@gmail.com" },
];

function DashBoard() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // call API here to set row data

    axiosInstance
      .get("/list")
      .then((response) => {
        setRowData(rows);
      })
      .catch((error) => {
        console.error(error);
      });

    setRowData(rows);
  }, []);

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component='th'>EMail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData?.map((row) => (
              <TableRow
                key={row.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DashBoard;