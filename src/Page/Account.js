import React from 'react'
import { Typography, Grid, Button,Stack, Container, Box, Divider, TextField, Paper, Fab, Snackbar, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
export default function Account() {
    return (
        <Box sx={{ pl: 30 }}>
            <Container>
                <Paper>
                    <Typography textAlign={'start'}sx={{pt:2,pl:2}} variant='h5'>
                        Profile Detail
                    </Typography>
                    <Divider sx={{pb:2}} />
                    <Grid  sx={{ pt: 5, pb: 5 }} textAlign={'center'} container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'Username'}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'Password'}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'TELEPHONE'}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'Email'}>
                            </TextField>
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
                    <Grid sx={{justifyContent:'end',display:'flex',pb:2,pr:2}} item>
                        <Stack direction={'row'} spacing={2}>
                        <Button
                            variant="contained"
                        >
                            Confirm
                        </Button>
                        <Button
                            sx={{color:'blue'}}
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
