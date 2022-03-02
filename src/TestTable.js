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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function TestTable() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  const UsersGetById = (id) => {
    console.log(id)
    fetch("https://www.mecallapi.com/api/users/" + id)
      .then(res => res.json())
      .then(
        (result) => {
          setFname(result.user.fname)
          setLname(result.user.lname)
          setUsername(result.user.username)
          setEmail(result.user.email)
          setAvatar(result.user.avatar)
        }
      )

  }
  const UpdateUser = id => {
    // window.location = '/update/' + id
    handleClickOpen()
    UsersGetById(id)

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        component="form" noValidate
      >
        <DialogTitle id="alert-dialog-title">
          {"Adding new members to the crew"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography>Name: {fname} {lname}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Issue: Airfliter</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Fristname"
                label="FristName"
                variant="outlined"
                onChange={(e) => setFname(e.target.value)}
                value={fname}

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="Lastname"
                label="Lastname"
                variant="outlined"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                id="Email"
                label="Email"
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                id="Age"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="username"
                label="username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="avatar"
                label="avatar"
                variant="outlined"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            variant="contained"
          //  onClick={handleClose} 
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>

  );
}