import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate() {
  const classes = useStyles();
  const axios = require("axios");
  const url = "http://192.168.1.53:8080";
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(url + "/m/get?id=" + id)
      // .then(res => console.log(res.data))
      .then(
        (result) => {
          console.log(result.data)
          setFname(result.data.firstName)
          setLname(result.data.lastName)
          setEmail(result.data.email)
          setTelephone(result.data.telephone)
          setGender(result.data.gender)
        })
    // fetch("https://www.mecallapi.com/api/users/"+id)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       setFname(result.user.fname)
    //       setLname(result.user.lname)
    //       setUsername(result.user.username)
    //       setEmail(result.user.email)
    //       setAvatar(result.user.avatar)
    //     }
    //   )
  }, [id])

  const handleChange = (event) => {
    setGender(event.target.value);    
  };
  const handleSubmit = event => {
    event.preventDefault();
 
    var data = {
      id: id,
      status: true,
      firstName: fname,
      lastName: lname,
      telephone: telephone,
      email: email,
      gender: gender,
      age: 22,
    }
    axios.put(url + "/m/update", data).then((res) => {
      console.log(res);
      window.location.href = '/mechanic';
    });
    // fetch('https://www.mecallapi.com/api/users/update', {
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/form-data',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     alert(result['message'])
    //     if (result['status'] === 'ok') {
    //       window.location.href = '/testtable';
    //     }
    //   }
    // )
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [telephone,setTelephone] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telephone"
                label="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
            <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="gender-select"
                label="gender"
                // value={gender}
                // SelectDisplayProps={gender}
                // input={gender}
                onChange={handleChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
                </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}