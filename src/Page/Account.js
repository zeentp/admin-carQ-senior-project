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
                    <Typography variant='h1'>
                        Profile
                    </Typography>
                    <Divider />
                    <Grid sx={{ pt: 5, pb: 5 }} container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'FirstName'}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '400px' }}
                                label={'LastName'}>
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
                                label={'te'}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>
                    <Grid sx={{justifyContent:'end',display:'flex',pb:2}} item>
                        <Stack direction={'row'} spacing={2}>
                        <Button
                            variant="contained"
                        >
                            Test
                        </Button>
                        <Button
                            variant="contained"
                        >
                            Test
                        </Button>
                        </Stack>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}
