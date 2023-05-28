import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './Header';
import axios from 'axios';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


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

  const token = localStorage.getItem('token')
  const headers = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${token}`,
    }
  }
  useEffect(() => {
    // call API here to set row data
    axios.get('http://localhost:3000/referral_invitations.json', headers).then((response) => {
      setRowData(response.data)
    })
  }, [token]);

  return (
    <>
      <Header />
      {rowData.length == 0 ?
      <Grid container justifyContent="center" sx={{mt: '100px'}}>
        <h1>You have not sent any invitation yet!</h1>
      </Grid>  :

      ( <> <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component='th'>Referred Email</TableCell>
              <TableCell component='th'>Invitation Status</TableCell>
              <TableCell component='th'>Invitation Sent on</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData && rowData.map((row) => (
              <TableRow
                key={row.id}
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
      </>)}
    </>
  );
}

export default DashBoard;