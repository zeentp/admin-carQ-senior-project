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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import "../Css/Button.css";
import { URL as url } from '../Constant';




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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const MultipleSelect = () => {
    const theme = useTheme();
    const [mechanics, setMechanics] = React.useState([]);
    const [personName, setPersonName] = React.useState([]);
    const [users, setUsers] = useState([]);
    const [names, setNames] = useState([]);
    const axios = require("axios");
    const { id } = useParams();

    useEffect(() => {
        axios.get(url + "/a/details?id=" + id)
            .then(
                (result) => {
                    console.log(result.data)
                    setMechanics(result.data.mechanic)
                })
    }, [id])



    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Mechanic</InputLabel>
                <Select
                    sx={{ textAlign: 'start' }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Mechanic" />}
                    MenuProps={MenuProps}
                >
                    {mechanics.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default function UserUpdate() {
    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const classes = useStyles();
    const { id } = useParams();
    const [disableEditButton, setDisableEditButton] = React.useState(true);
    const axios = require("axios");



    useEffect(() => {
        console.log(id)
        axios.get(url + "/a/details?id=" + id)
            // .then(res => console.log(res.data))
            .then(
                (result) => {
                    console.log(result.data)
                    setFname(result.data.firstName)
                    setLname(result.data.lastName)
                    setEmail(result.data.email)
                    setTelephone(result.data.telephone)
                    setGender(result.data.gender)
                    setIssue(result.data.description)
                    setBrand(result.data.brand)
                    setPlateNumber(result.data.plate_no)
                    setDateTime(result.data.starts_at.seconds)
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


    const handleChangeSelect = (event) => {
        setStatus(event.target.value);
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
    }
    const [editFlag, setEditFlag] = useState(false);

    const [fname, setFname] = useState('');
    const inputRef = React.useRef(null);
    const [lname, setLname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [issue, setIssue] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [isCheck1, setIscheck1] = useState(false);
    const [isCheck2, setIscheck2] = useState(false);
    const [dateTime, setDateTime] = useState('');
    const [status, setStatus] = useState('');


    const formatDate = (d) => {
        const date = new Date(d * 1000).toLocaleString('fr-FR')
        return date
    }
    const check1 = async () => {
        setIscheck1(true)
        setIscheck2(false)
        if (isCheck1 === true) {
            setIscheck1(false)
        }


    }
    const check2 = async () => {
        setIscheck1(false)
        setIscheck2(true)
        if (isCheck2 === true) {
            setIscheck2(false)
        }

    }
    const handleEditClick = () => {
        setEditFlag(editFlag === false ? true : false)
        setDisableEditButton(disableEditButton === false ? true : false)
        setAlertOpen(true)
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

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };
    // const loadInfo = {};
    const { register, errors, reset } = useForm();



    return (
        <Box sx={{ pl: 90, pb: 5 }} >
            <Paper sx={{ pt: 10, p: 5, width: '666px' }}>
                <div className={classes.paper}>
                    <Typography sx={{ pb: 2 }} component="h1" variant="h5">
                        Accepting an appointment card
                    </Typography>
                    {/* {editFlag === false ? <Fab
                        color=""
                        aria-label="edit"
                        onClick={handleEditClick}
                    >
                        <EditIcon />
                    </Fab> :
                        <Button
                            variant="outlined"
                            onClick={() => refreshPage()}>cancel</Button>
                    } */}
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
                                    value={fname}
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
                                    id="plateNumber"
                                    label="plateNumber"
                                    value={plateNumber}
                                    onChange={(e) => setPlateNumber(e.target.value)}
                                    disabled={disableEditButton}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="brand"
                                    label="brand"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
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
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Date"
                                    label="Date"
                                    value={formatDate(dateTime)}
                                    disabled={disableEditButton}
                                // onChange={(e) => setTelephone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={issue}
                                    id="issue"
                                    label="issue"
                                    disabled={disableEditButton}
                                // onChange={(e) => setTelephone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MultipleSelect></MultipleSelect>
                            </Grid>
                            <Grid item xs={12}>
                                {status === 'booking' ?

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
                                    : <Box>
                                        <FormControl>
                                            <Box sx={{
                                                "& .MuiSelect-select": { width: "63ch" },
                                            }}>
                                                <InputLabel id="demo-simple-select-label">
                                                    Status
                                                </InputLabel>
                                                <Select
                                                    sx={{ textAlign: 'start' }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status}
                                                    label="Status"
                                                    // label="Status"
                                                    onChange={handleChangeSelect}
                                                >
                                                    <MenuItem value={'pedding'}>pedding</MenuItem>
                                                    <MenuItem value={'completed'}>completed</MenuItem>
                                                </Select>
                                            </Box>
                                        </FormControl>
                                    </Box>}
                            </Grid>
                            <Grid sx={{ pb: 2 }} item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="note"
                                    label="note"
                                    multiline
                                // onChange={(e) => setTelephone(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            // className={classes.submit}
                            className="setHomebtn"
                        >
                            Submit
                        </Button>
                        {/* <button type="submit" id = "setHomebtn">Calculate</button> */}

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
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="info" sx={{ width: '100%' }}>
                    Editing
                </Alert>
            </Snackbar>
        </Box>
    );

}
