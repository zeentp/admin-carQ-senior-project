import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Stack, Typography, Paper, TextField, Card, Box, Fab, CardContent, Button, CardActions, Container, Divider } from '@mui/material'
import { Scale } from '@mui/icons-material';
import "../Css/Card.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const useStyles = makeStyles({
    card: {
        "&:hover": {
            cursor: "pointer",
            backgroundColor: 'red',
            "& $addIcon": {
                color: "purple"
            }
        }
    },
    outerDiv: {
        "&:hover": {
            cursor: "pointer",
            backgroundColor: 'red',

            "& $addIcon": {
                color: "purple"
            }
        }
    },
});

const handleOnClickAdminSide = () => {
    window.location.href = "/login";
}
export default function Hook() {
    const classes = useStyles();
    return (
        <Box sx={{ bgcolor: "#efefef", height: '100vh', alignItems: 'center', display: 'flex', backgroundImage: 'url(https://www.teahub.io/photos/full/281-2817089_retro-wave-car-gif.png)', }}  >

            <Container >
                {/* <Typography variant="h2">
                test
            </Typography> */}
                <Grid container justifyContent={'center'}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={5}
                    >
                        <Grid onClick={handleOnClickAdminSide} className='grid' item xs={12} md={6} component={Paper} elevation={6} square
                            sx={{ border: "2px solid", borderColor: '#3864F8', pb: 2, bgcolor: '#DBDFEC' }}>
                            <Grid sx={{ pb: 2 }} />
                            <Grid>
                                <Fab
                                    disabled={true}
                                    color=""
                                // aria-label="edit"

                                >
                                    <SupervisorAccountIcon sx={{ color: "blue" }} />
                                </Fab>
                                <Typography variant="h4">
                                    Admin side
                                </Typography>
                                <CardContent>
                                    <Typography color={'#868687'} variant="h5" component="div">
                                        Webbee will make your product look modern and professional while saving you precious time.
                                    </Typography>
                                </CardContent>
                                {/* <Button onClick={handleOnClickAdminSide} variant="contained">
                                    GO!
                                </Button> */}
                            </Grid>
                        </Grid>
                        <Grid onClick={handleOnClickAdminSide} item xs={12} md={6} className='grid' component={Paper} elevation={6} square
                            sx={{ border: "2px solid", borderColor: '#3864F8', pb: 2, bgcolor: '#DBDFEC' }}>

                            <Grid sx={{ pb: 2 }} />
                            <Grid>
                                <Box >
                                    <Fab
                                  
                                        disabled={true}
                                        color=""
                                    // aria-label="edit"

                                    >
                                        <EventNoteIcon sx={{ color: "blue"}} />
                                    </Fab>
                                    </Box>
                                    <Typography  variant="h4">
                                        Client side
                                    </Typography>
                            
                                <CardContent>
                                    <Typography color={'#868687'} variant="h5" component="div">
                                        Webbee will make your product look modern and professional while saving you precious time.
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    )
}