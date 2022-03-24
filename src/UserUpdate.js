import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { URL as url } from './Constant';
import { InputLabel,Select } from '@mui/material'
import "./Css/Button.css";
import { findAllByDisplayValue } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
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
    // marginLeft: theme.spacing(3),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate() {
  const classes = useStyles();
  const axios = require("axios");
  const [editFlag, setEditFlag] = useState(false);
  const [disableEditButton, setDisableEditButton] = React.useState(true);
  const { id } = useParams();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [status, setStatus] = React.useState(null);

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
          setStatus(result.data.status)
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
      status: status,
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

 

  const handleChangeSelect = (event) => {
    setStatus(event.target.value);
  };
  const handlePhoneChange = (event) => {
    var val = event.target.value.replace(/[^0-9]/g, "");
    console.log(val)
    if (val[0] === "0") {
      let a = val;
      a = val.slice(0, 3);
      a += val.length > 3 ? "-" + val.slice(3, 6) : "";
      a += val.length > 6 ? "-" + val.slice(6) : "";
      val = a;
    } else {
      val = "";
    }
    setTelephone(val);
  };

  const handleEditClick = () => {
    setEditFlag(editFlag === false ? true : false)
    setDisableEditButton(disableEditButton === false ? true : false)
    setAlertOpen(true)


  }



  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };



  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Box sx={{ pl: 10 }}>
      <Container>
        <Paper>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Crew
            </Typography>
            {editFlag === false ? <Fab
              color=""
              aria-label="edit"
              onClick={handleEditClick}
            >
              <EditIcon />
            </Fab> :
              <Button
                variant="outlined"

                onClick={() => refreshPage()}>cancel</Button>}
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid sx={{ display: 'flex' }} container spacing={2}>
                <Grid item xs={12}>
                  <Stack
                    sx={{ justifyContent: 'center', alignItems: 'center' }}
                    direction={"row"} spacing={3}  >
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      // fullWidth
                      id="firstName"
                      label="First Name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      autoFocus
                      disabled={disableEditButton}
                    />
                    <TextField
                      variant="outlined"
                      required
                      // fullWidth
                      id="lastName"
                      label="Last Name"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      disabled={disableEditButton}
                    />
                  </Stack>
                  <Grid sx={{ pt: 2 }} item xs={12}>
                    <Stack
                      sx={{ justifyContent: 'center', alignItems: 'center' }}
                      direction={"row"} spacing={3} >
                      <TextField
                        variant="outlined"
                        required
                        // fullWidth
                        id="email"
                        label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={disableEditButton}
                      />

                      <TextField
                        variant="outlined"
                        required
                        // fullWidth
                        id="telephone"
                        label="Telephone"
                        value={telephone}
                        inputProps={{ maxLength: 12 }}
                        onChange={handlePhoneChange}
                        disabled={disableEditButton}
                      // onChange={(e) => setTelephone(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid sx={{ pt: 2 }} item xs={12}>
                    <Stack
                      sx={{ justifyContent: 'center', alignItems: 'center' }}
                      direction={"row"} spacing={3} >
                        <Box>
                      <FormControl fullWidth>
                        <Box>
                          <InputLabel id="demo-simple-select-label">
                            1
                          </InputLabel>
                          <Select
                          fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            // label="Status"
                            onChange={handleChangeSelect}
                            disabled={disableEditButton}
                          >
                            <MenuItem value={true}>avaliable</MenuItem>
                            <MenuItem value={false}>unavaliable</MenuItem>
                          </Select>
                        </Box>
                      </FormControl>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  {/* <FormControl fullWidth>
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
                </FormControl> */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Update
              </Button>
              {/* <button id = "setHomebtn" type="submit" >update</button> */}
            </form>
          </div>
        </Paper>
        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="info" sx={{ width: '100%' }}>
            Editing
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}