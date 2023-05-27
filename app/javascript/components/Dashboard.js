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

function formattedDate(date) {
  const datetimeString = date;
  const parsedDate = new Date(datetimeString);
  const formattedDate = parsedDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return formattedDate;
}
function DashBoard() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // call API here to set row data
    axiosInstance
      .get("/referral_invitations")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component='th'>Referred Email</TableCell>
              <TableCell component='th'>Invitation Status</TableCell>
              <TableCell component='th'>Invitation Sent on</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell component="th" scope="row">
                  {formattedDate(row.created_at)}
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