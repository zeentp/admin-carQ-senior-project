import React, { useState, useEffect, useReducer } from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
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
import { Chip, Paper, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
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
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { withStyles } from '@mui/styles';




const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
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
const StyleChip = withStyles({
    root: {
        backgroundColor: 'grey'
    }
})(Chip);
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

// const MultipleSelect = () => {
//     const theme = useTheme();
//     const [users, setUsers] = useState([]);
//     const [names, setNames] = useState([]);
//     const axios = require("axios");
//     const { id } = useParams();



//     const handleChangeMechanic = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setPersonName(
//             // On autofill we get a stringified value.
//             typeof value === 'string' ? value.split(',') : value,
//         );
//     };

//     return (
//         <div>
//             <FormControl sx={{ width: "100%" }}>
//                 <InputLabel id="demo-multiple-name-label">Mechanic</InputLabel>
//                 <Select
//                     sx={{ textAlign: 'start' }}
//                     labelId="demo-multiple-name-label"
//                     id="demo-multiple-name"
//                     multiple
//                     value={personName}
//                     onChange={handleChangeMechanic}
//                     input={<OutlinedInput label="Mechanic" />}
//                     MenuProps={MenuProps}
//                 >
//                     {mechanics.map((name) => (
//                         <MenuItem
//                             key={name}
//                             value={name}
//                             style={getStyles(name, personName, theme)}
//                         >
//                             {name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }
export default function UserUpdate() {
    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const classes = useStyles();
    const { id } = useParams();
    const [disableEditButton, setDisableEditButton] = React.useState(true);
    const axios = require("axios");
    const [personName, setPersonName] = React.useState([]);
    const [mechanics, setMechanics] = React.useState([]);



    useEffect(() => {
        console.log(id)
        getMechanics()

        axios.get(url + "/a/details?id=" + id)
            .then(
                (result) => {
                    setIsLoading(false)
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
                    setAppointmentId(result.data.appointment_id)
                    // console.log(status)
                    // console.log(result.data.status)
                    console.log(result.data.appointment_id)
                    // mechanics.push(result.data.pic)
                    console.log(result.data.pic)

                })
        // setMechanics(mechanics => [...mechanics, {pic: pic}]);

    }, [id])

    const handleChangeSelect = (event) => {
        setStatus(event.target.value);
    };
    const handleSubmit = event => {
        setAlertOpen(true)
        event.preventDefault();
        // personName.forEach((i) =>{
        //     if(state.selectedOptions.includes(i)){
        //         console.log('1')
        //     }else{
        //         removeMechanic.push(i)
        //         console.log('2')
        //     }
        // })
        pic.forEach((m) => {
            if (!state.selectedOptions.includes(m)) {
                removeMechanic.push(m)
            }
        })
        console.log(personName)
        console.log('---------------------')
        console.log(removeMechanic)


        var data = {
            appointment_id: appointmentId,
            mechanic_id: state.selectedOptions,
            note: note,
            pic: pic,
            removeMechanic: removeMechanic,
            status: isCheck1 === true && isCheck2 === false ? 'pending' : isCheck2 === true && isCheck1 === false ? 'rejected' : status,
            //  ends_at:,
            //note:,
            //status:,
        }


        console.log(data)
        axios.put(url + "/a/details/update", data).then((res) => {
            console.log(res);
            // setTimeout(() => {
            //     window.location.href = '/dashboardPage';
            // }, 3000)
        });
        var data2 = {
            removeMechanic: removeMechanic,
        }
        setTimeout(() => {
            axios.put(url + "/a/status", data2).then((res) => {
                console.log(res);
                window.location.href = '/dashboardPage';
            });
        }, 3500)

    }
    const [editFlag, setEditFlag] = useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
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
    const [appointmentId, setAppointmentId] = useState('');
    const [status, setStatus] = useState('');
    const [note, setNote] = useState('');
    const [pic, setPic] = useState([]);
    const produce = [...mechanics, ...pic];
    const initialState = { selectedOptions: [] };
    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        switch (action.type) {
            case "SET_SELECTED_OPTIONS":
                return { selectedOptions: action.payload.pic };

            case "REMOVE_OPTION":
                return {
                    selectedOptions: state.selectedOptions.filter(
                        (pic) => pic !== action.payload.pic
                    )
                };
            default:
                throw new Error();
        }
    }


    const theme = useTheme();
    const propertyNames = Object.keys(mechanics);
    const [removeMechanic, setRemoveMechanic] = React.useState([]);


    useEffect(() => {
        // state.selectedOptions.join(pic)
    }, [])
    const test = [

    ]
    function getMechanics() {
        axios.get(url + "/a/details?id=" + id)
            .then(
                (result) => {
                    setPic(result.data.pic)
                    dispatch({ type: "SET_SELECTED_OPTIONS", payload: { pic: result.data.pic } });
                    setMechanics(result.data.mechanic)
                    result.data.pic.map((n) => {
                        mechanics.push(n)
                        console.log('1')
                    }
                    )
                    console.log(mechanics)
                })
    }

    const handleChangeMechanic = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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
        // setStatus('rejected')

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
    const removeOption = (id) => {
        // state.selectedOptions.map((n) => {
        //     if (n !== id) {
        //         if (!personName.includes(id)) {
        //             personName.push(id)
        //         }
        //     }
        // }
        // )

        // setMechanics([...mechanics,pic])
        if (!personName.includes(id)) {
            personName.push(id)
        }
        console.log(id)
        console.log(state.selectedOptions)
        // setPersonName(id)

        dispatch({ type: "REMOVE_OPTION", payload: { pic: id } });
    };

    const handleChange = (event, values) => {
        // setMechanics([...mechanics,pic])
        console.log(state.selectedOptions)
        dispatch({ type: "SET_SELECTED_OPTIONS", payload: { pic: values } });
    };

    // const removeOption =(a) =>{
    //     console.log('before')
    //     console.log(pic)
    //     pic.map((i)=> {
    //         if(i===a){
    //             pic.pop(a)
    //         }
    //     }
    //     )
    //     console.log(pic)
    // }


    return (
        <Box sx={{ pl: 80, pb: 5 }} >
            <Paper sx={{ pt: 10, p: 5, width: '666px' }}>
                <div className={classes.paper}>
                    <Box sx={{ py: 2, px: 4, bgcolor: '#2c344c', color: 'white' }} >
                        <Typography variant='h5'>
                            Appointment Details
                        </Typography>
                    </Box>
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
                    {isLoading === true ? <CircularProgress />
                        :
                        <div>
                            <Box sx={{ py: 2, px: 1 }} >

                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold', pb: 2 }}>

                                    </Typography>
                                    {status === 'booking' ? <StyleChip color='primary' label={'booking'} /> :
                                        <Chip label={status}
                                            color={status === 'completed' ? "success" : status === 'on-track' ? "primary" : status === 'pending' ? 'secondary' : 'error'}
                                        />
                                    }
                                </Box>
                                <Box
                                    sx={{ display: 'flex', bgcolor: 'background.paper', borderRadius: 1 }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>Name</Typography>
                                    <Typography> {fname + ' ' + lname}</Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex', bgcolor: 'background.paper', borderRadius: 1 }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Telephone
                                    </Typography>
                                    <Typography>
                                        {telephone}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Email
                                    </Typography>
                                    <Typography>
                                        {email}
                                    </Typography>

                                </Box>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Plate Number
                                    </Typography>
                                    <Typography>
                                        {plateNumber}
                                        {/* {bookingData.data.plateNumber} */}
                                    </Typography>
                                </Box>
                                <Stack spacing={3}>
                                    <Box></Box>
                                </Stack>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Carbrand
                                    </Typography>
                                    <Typography>
                                        {brand}
                                        {/* {bookingData.data.brand} */}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Services
                                    </Typography>
                                    <Typography>
                                        test
                                        {/* {bookingData.data.issue} */}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        Description
                                    </Typography>
                                    <Typography>
                                        {issue}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex' }}
                                >
                                    <Typography textAlign={'left'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                        PIC
                                    </Typography>
                                    <Typography>
                                        {pic}
                                    </Typography>
                                </Box>
                                <Divider sx={{ pb: 2 }}></Divider>
                            </Box>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} sm={6}>
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
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            value={pic}
                                            id="issue"
                                            label="Person in charge"
                                            disabled={disableEditButton}
                                        // onChange={(e) => setTelephone(e.target.value)}
                                        />
                                    </Grid> */}
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
                                                <FormControl sx={{ width: "100%" }}>
                                                    <Box >
                                                        <InputLabel id="demo-simple-select-label">
                                                            Status
                                                        </InputLabel>
                                                        <Select
                                                            fullWidth
                                                            autoFocus
                                                            sx={{ textAlign: 'start' }}
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={status}
                                                            label="Status"
                                                            // label="Status"
                                                            onChange={handleChangeSelect}
                                                        >

                                                            <MenuItem value={'pending'}>pending</MenuItem>
                                                            <MenuItem value={'on-track'}>on-track</MenuItem>
                                                            <MenuItem value={'completed'}>completed</MenuItem>
                                                        </Select>
                                                    </Box>
                                                </FormControl>
                                            </Box>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div>
                                            <FormControl sx={{ width: "100%" }}>
                                                <Autocomplete
                                                    disabled={isCheck2 === true ? true : false}
                                                    multiple
                                                    onChange={handleChange}
                                                    // onChange={(event, newValue) => {

                                                    //     setPersonName(newValue);
                                                    //     // setPic(newValue);
                                                    //     console.log(newValue)
                                                    // }}
                                                    id="tags-outlined"
                                                    options={produce}
                                                    disableCloseOnSelect
                                                    // getOptionLabel={(option) => option.title}
                                                    defaultValue={pic}
                                                    // value={state.selectedOptions}
                                                    // value={pic}
                                                    filterSelectedOptions
                                                    // renderTags={(values) =>
                                                    //     values.map((value) => (
                                                    //         <Chip
                                                    //             key={value}
                                                    //             label={value}
                                                    //             onDelete={() => {
                                                    //                 removeOption(value);
                                                    //             }}
                                                    //         />
                                                    //     ))
                                                    // }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Mechanics"
                                                            placeholder="Mechanics"
                                                        />
                                                    )}
                                                />
                                                {/* <InputLabel id="demo-multiple-name-label">Mechanic</InputLabel>
                                        <Select
                                            sx={{ textAlign: 'start' }}
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            multiple
                                            value={personName}
                                            onChange={handleChangeMechanic}
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
                                        </Select> */}
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid sx={{ pb: 2 }} item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="note"
                                            label="note"
                                            multiline
                                            onChange={(e) => setNote(e.target.value)}
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

                    }
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
                <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                    Updating
                </Alert>
            </Snackbar>
        </Box>
    );
    // https://codesandbox.io/s/material-ui-autocomplete-unchecking-checkboxes-in-renderoption-using-redux-dis-0nrho?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js
}
