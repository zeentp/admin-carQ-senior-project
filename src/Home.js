import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function Booking() {
    const axios = require('axios');
    axios.get('http://192.168.1.53:8080/v1/get?id=mechanic_1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
    return (
        <Box sx={{ pl: 40, pt: 20 }}>
            <Typography variant="h5" noWrap component="div">
                Welcome !
            </Typography>
        </Box>

    );

}
