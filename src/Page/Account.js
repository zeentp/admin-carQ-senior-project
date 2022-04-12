import React from 'react'
import { Typography, Grid, Button, Stack, Card, CardHeader, Container, Box, Divider, TextField, Paper, Fab, Snackbar, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import MainLayout from '../component/MainLayout'

export default function Account() {
    const axios = require("axios");
    const user = JSON.parse(localStorage.getItem('user'));
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setTelephone(user.telephone)
        console.log(user)
    }, [])

    // email: "pauld@gmail.com"
    // firstName: "paul"
    // id: "ALoqBiMufn6Hzt4lVm2B"
    // lastName: "doe"
    // role: "admin"
    // telephone: "0861245541"
    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            firstName : firstName,
            lastName : lastName,
            telephone: telephone,
            email: email,
        }
        // var me = {name:'myname',age:99,gender:'myGender'};
        localStorage.setItem('user', JSON.stringify(data));
        // var item = JSON.parse(localStorage.getItem('itemKey'));
        console.log('1')
        // var data = {
        //   id: id,
        //   status: true,
        //   firstName: fname,
        //   lastName: lname,
        //   telephone: telephone,
        //   email: email,
        //   status: status,
        // }
        // axios.put(url + "/m/update", data).then((res) => {
        //   console.log(res);
        //   window.location.href = '/mechanic';
        // });
    }

    function testNotify() {
        console.log('test')
        // localStorage.setItem('itemKey', JSON.stringify(yourObject));
        // var item = JSON.parse(localStorage.getItem('itemKey'));
        axios({
            method: 'post',
            url: 'https://notify-api.line.me/api/notify',
            data: {
                message: 'test',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer vBVe6hC2qYFhqdHYalgigHUhFnX5EluEYYpUZAQKNLZ',
            }
        });
    }
    return (
        <Box sx={{ pl: 10 }}>
            <MainLayout isCard={true}>
                <Card>
                    <CardHeader title="Account" />
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction={"column"} >
                                <Grid item spacing={2}>
                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                        pb={2}>
                                        <Grid>
                                            <TextField
                                                id="standard-multiline-flexible"
                                                label="First Name"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                maxRows={4}
                                            // value={value}
                                            // onChange={(e) => setFname(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField
                                                //  error ={isEmpty}
                                                //  helperText={ isEmpty === true ? "please fill the form":''}
                                                id="standard-multiline-flexible"
                                                label="Last Name"
                                                maxRows={4}
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            // onChange={(e) => setLname(e.target.value)}
                                            // value={value}
                                            // onChange={handleChange}
                                            />
                                        </Grid>
                                    </Stack>
                                </Grid>
                                <Grid item spacing={2}>
                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                        pb={2}>
                                        <Grid>
                                            <TextField
                                                autoComplete="fname"
                                                name="Email"
                                                variant="outlined"
                                                required
                                                id="Email"
                                                label="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoFocus
                                            //   disabled={disableEditButton}
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField
                                                autoComplete="fname"
                                                name="Telephone"
                                                variant="outlined"
                                                required
                                                id="Telephone"
                                                label="Telephone"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)}
                                                autoFocus
                                            //   disabled={disableEditButton}
                                            />
                                        </Grid>
                                    </Stack>
                                    <Grid sx={{ justifyContent: 'center', display: 'flex' }} item>
                                        <Stack direction={'row'} spacing={2}>
                                            <Button
                                                variant="contained"
                                                // onClick={testNotify}
                                                type="submit"
                                            >
                                                Confirm
                                            </Button>
                                            <Button
                                                sx={{ color: 'blue' }}
                                                onClick={ (e) => {window.location.href = '/Home';}}
                                            >
                                                Cancel
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </MainLayout>
            {/* <Container>
                <Paper>
                    <Typography textAlign={'start'} sx={{ pt: 2, pl: 2 }} variant='h5'>
                        Profile Detail
                    </Typography>
                    <Divider sx={{ pb: 2 }} />
                    <Grid sx={{ pt: 5, pb: 5 }} textAlign={'center'} container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                id="firstName"
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                autoFocus
                            //   disabled={disableEditButton}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="fname"
                                name="lastName"
                                variant="outlined"
                                required
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                autoFocus
                            //   disabled={disableEditButton}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                                autoComplete="fname"
                                name="Email"
                                variant="outlined"
                                required
                                id="Email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            //   disabled={disableEditButton}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                                autoComplete="fname"
                                name="Telephone"
                                variant="outlined"
                                required
                                id="Telephone"
                                label="Telephone"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                autoFocus
                            //   disabled={disableEditButton}
                            />
                        </Grid>
                        {/* <Grid item xs={6}>
                            <TextField sx={{ width: '400px' }}
                                label={'FirstName'}>
                            </TextField>
                        </Grid>
                        <Grid
                            sx={{ width: '400px' }}
                            item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'LastName'}>
                            </TextField>
                        </Grid> */}
            {/* </Grid>
                    <Grid sx={{ justifyContent: 'end', display: 'flex', pb: 2, pr: 2 }} item>
                        <Stack direction={'row'} spacing={2}>
                            <Button
                                variant="contained"
                            >
                                Confirm
                            </Button>
                            <Button
                                sx={{ color: 'blue' }}
                            >
                                Cancel
                            </Button>
                        </Stack>
                    </Grid>
                </Paper>
            </Container> */}

        </Box>
    )
}
