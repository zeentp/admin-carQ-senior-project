import * as React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";


const Home = () => {
    let params = useParams();

    return (
        <Box sx={{ pl: 50, pt: 30, width: '95%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            disabled={true}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                </Grid>

            </Paper>

        </Box>

    );

}

export default Home