import * as React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';


const Home = () => {
    let params = useParams();

    return (
        <Box sx={{ pl: 40, pt: 30 }}>
            <Link to="/create">
            <Typography variant="h5" noWrap component="div">
                Welcome !
            </Typography>
            </Link>
        </Box>

    );

}

export default Home