import React from 'react'
import { Typography, Grid, Button, Stack, Container, Box, Divider, TextField, Paper, Fab, Snackbar, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';

export default function Account() {
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

    }, [])
    return (
        <Box sx={{ pl: 30 }}>
            <Container>
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
                    </Grid>
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
            </Container>
        </Box>
    )
}
