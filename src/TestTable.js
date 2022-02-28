import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';


export default function TestTable() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UsersGet()
    }, []);
    const UsersGet = () => {
        fetch("https://www.mecallapi.com/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result)
                }
            )
    }
    const UpdateUser = id => {
        window.location = '/update/'+id
      }
      const UserDelete = id => {
        var data = {
          'id': id
        }
        fetch('https://www.mecallapi.com/api/users/delete', {
          method: 'DELETE',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(
          (result) => {
            alert(result['message'])
            if (result['status'] === 'ok') {
              UsersGet();
            }
          }
        )
      }
    
    return (
        <TableContainer sx={{ pl: 40, pt: 20 }} component={Paper}>
              <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
            <Table sx={{ Width: '50%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Fname</TableCell>
                        <TableCell align="right">Lname</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Avatar</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>

                            <TableCell align="right">{user.fname}</TableCell>
                            <TableCell align="right">{user.lname}</TableCell>
                            <TableCell align="right">{user.username}</TableCell>
                            <TableCell align="right">{user.avatar}</TableCell>
                            <TableCell align="right">
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                                <Button onClick={() => UserDelete(user.id)}>Del</Button>
                            </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}