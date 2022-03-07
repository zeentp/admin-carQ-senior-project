import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";


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
    title: {
        textAlign: 'flex-start'
    }
}));

export default function UserUpdate() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const axios = require("axios");
    const url = "http://192.168.1.53:8080";
    const { id } = useParams();
    const [disableEditButton, setDisableEditButton] = React.useState(true);


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
        console.log(isCheck1)

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
            // axios.put(url + "/m/update", data).then((res) => {
            //     console.log(res);
            //     window.location.href = '/mechanic';
            // });
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
    // const [textEdit, setTextEdit] = useState('');
    const [editFlag, setEditFlag] = useState(false);


    const [fname, setFname] = useState('555');
    const inputRef = React.useRef(null);

    const [lname, setLname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isCheck1, setIscheck1] = useState(false);
    const [isCheck2, setIscheck2] = useState(false);


    const check1 = async () => {
        setIscheck1(true)
        setIscheck2(false)
        if(isCheck1 === true){
            setIscheck1(false)
        }


    }
    const check2 = async () => {
        setIscheck1(false)
        setIscheck2(true)
        if(isCheck2 === true){
            setIscheck2(false)
        }

    }
    const handleEditClick = () => {
        setEditFlag(editFlag === false ? true : false)
        setDisableEditButton(disableEditButton === false ? true : false)
        reset()


    }
    function refreshPage() {
        window.location.reload(false);
    }
    // const handleOnClick = () => {
    //     setDisableEditButton(false)
    //     handleEditClick()
    // }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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

    // const loadInfo = {};
    const { register, errors, reset } = useForm();



    return (
        <Box sx={{ pt: 15, pl: 60 }} >
            <Paper sx={{ pt: 10, p: 5, width: '666px' }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Accepting an appointment card
                    </Typography>
                    {editFlag === false ? <Fab
                        color="secondary"
                        aria-label="edit"
                        onClick={handleEditClick}
                    >
                        <EditIcon />
                    </Fab> :
                        <Button
                            variant="outlined"

                            onClick={() => refreshPage()}>cancel</Button>}

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    defaultValue={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    autoFocus
                                    disabled={disableEditButton}
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
                                    disabled={disableEditButton}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={disableEditButton}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="telephone"
                                    label="Telephone"
                                    value={telephone}
                                    inputProps={{ maxLength: 12 }}
                                    onChange={handlePhoneChange}
                                    disabled={disableEditButton}
                                // onChange={(e) => setTelephone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="mechanic"
                                    label="Mechanic"
                                    value={telephone}
                                    disabled={disableEditButton}
                                // onChange={(e) => setTelephone(e.target.value)}
                                />

                            </Grid>

                            <Grid item xs={2}>
                                <Fab
                                    aria-label="edit"
                                    onClick={handleClickOpen}
                                >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="note"
                                    label="Note"
                                    disabled={disableEditButton}
                                // onChange={(e) => setTelephone(e.target.value)}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <FormControlLabel onChange={check1} checked={isCheck1} control={<Checkbox defaultChecked />} label="Accept" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControlLabel onChange={check2} checked={isCheck2} control={<Checkbox />} label="Decline" />
                                        </Grid>
                                    </Grid>
                                </FormGroup>
                            </Grid>

                            {/* <Grid item xs={12}> */}
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
                            {/* </Grid> */}
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
            </Paper >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                component="form" noValidate onSubmit={handleSubmit}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Adding new members to the crew"}
                </DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="Fristname"
                                label="FristName"
                                variant="outlined"
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="Lastname"
                                label="Lastname"
                                variant="outlined"
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        type="submit"
                        variant="contained"
                    // disabled={disableApplyButton}
                    //  onClick={handleClose} 
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );

}
