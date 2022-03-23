import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Grid, Button, Container, Box, Divider } from "@mui/material";
import { height } from '@mui/system';
// import Carousel from "./Carousel";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    corousel: {
      width: '100%',
    //   [theme.breakpoints.down("md")]: {
    //     width: 900,
    //   },
    //   [theme.breakpoints.down("md")]: {
    //     width: 600,
    //   },
    },
  }));
export default function CarouselComponent () {
    const theme = useTheme();
  const classes = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: 'https://metroautographs.com/wp-content/uploads/2019/08/Vehicle-Repair003.jpg',

        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: 'https://www.betterteam.com/images/diesel-mechanic-job-description-4550x2500-20201124.jpeg?crop=2:1,smart&width=1200&dpr=2',
        }
    ]
    return (
        // <div>Corousel</div>
        <Box xs={12}>
            <Carousel className={classes.corousel} >
            {
                items.map((item, i) =>
                    // <Typography>{item.name}</Typography>
                    <img  className={classes.corousel} height={500} src={item.src} />
                )
            }
            </Carousel>
        </Box>
    )
}
