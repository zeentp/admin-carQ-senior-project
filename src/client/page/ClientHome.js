import * as React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import CarImg from '../../img/car-vector.png';
import {
  Typography,
  Grid,
  Button,
  Container,
  Paper,
  TextField,
  Stack,
  CardContent,
  CardActions,
  Avatar,
  CardMedia,
} from "@mui/material";
import Handyman from "@mui/material/ListItemIcon";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Divider from "@mui/material/Divider";
import MainLayout from "../component/MainLayout";
import "../../Css/Button.css";
import CarouselComponent from "../component/CarouselComponent";


export default function Home() {
  let params = useParams();

  const handleOnClick = () => {
    console.log(window.innerWidth)
    window.location.href = "/booking";
  };
  return (
    <Box sx={{ bgcolor: '#243040' }}>
      <MainLayout>
        <Box display={'grid'}  justifyContent={'center'}  sx={{ pt: 3, bgcolor: "#1a2138" }}>
          <Grid container spacing={2}>
            <Container  >
              <Grid pl={{ xs: 2, md: 0, sm: 0 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={{xs:2,md:8,sm:3}}>
                  <Grid sx={{ color: 'white' }} textAlign={{ xs: 'center', sm: 'start' }} alignItems={{ xs: 'center', sm: 'start' }} direction={'column'} display={'flex'}>
                    <Typography variant="h2">Car-Q Services</Typography>
                    <Typography sx={{ pb: 2 }} variant="h5">Reservation Online</Typography>
                    <button onClick={handleOnClick} id="setEffectButton"> Booking </button>
                  </Grid>
                  <Grid  >
                    <img

                      sx={{ pt: 5}}
                      // height={{xs:100,sm:500}}
                      // width={500}
                      className='responsive'
                      src={
                        'https://www.pngall.com/wp-content/uploads/12/Modern-Garage-PNG.png'
                      }
                    />
                  </Grid>
                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} sx={{ pt: 8, bgcolor: "#1a2138" }}>
          <Grid container spacing={2}>
            <Container >
              <Grid pl={{ xs: 2, md: 0, sm: 2 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <EditIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: 'white' }}>
                      <Typography variant="h5" component="div">
                        Built for developers
                      </Typography>
                      <Typography color={'#7b808b'} variant="h6" component="div">
                        Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <EditIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: 'white' }}>
                      <Typography variant="h5" component="div">
                        Designed to be modern
                      </Typography>
                      <Typography color={'#7b808b'} variant="h6" component="div">
                        Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>

                    <CardActions>
                      <Avatar sx={{ width: 54, height: 54, bgcolor: '#223353' }}>
                        <EditIcon sx={{ fontSize: 40, color: '#1a6ec3' }} />
                      </Avatar>
                    </CardActions>
                    <CardContent sx={{ color: '#eeeeef' }}>
                      <Typography variant="h5" component="div">
                        Documentation for everything
                      </Typography>
                      <Typography color={'#7b808b'} variant="h6" component="div">
                        We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
                      </Typography>
                    </CardContent>
                  </Grid>

                </Stack>
              </Grid>
            </Container>
          </Grid>
        </Box>
        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} sx={{ pt: 6,pb:4, bgcolor: "#222b45" }}>
          <Grid container spacing={2}>
            <Container>
              <Grid pl={{ xs: 2, md: 0, sm: 2 }} item xs={12} md={12} lg={12} spacing={2}>
                <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={2}>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid className='card' item xs={12} md={6} component={Paper} elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid/>
                      <Grid>
                      <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                          // alt="green iguana"
                        />
                        <Typography sx={{pt:1}} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid className='card' item xs={12} md={6} component={Paper} elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid />
                      <Grid>
                      <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                          // alt="green iguana"
                        />
                        <Typography sx={{pt:1}} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid textAlign={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'center' }} direction={'column'} display={'flex'}>
                    <Grid  className="card" item xs={12} md={6} component={Paper}  elevation={6}
                      sx={{ pb: 2, bgcolor: '#2d364e' }}>
                      <Grid/>
                      <Grid>
                        <CardMedia
                          // sx={{pb:2}}
                          component="img"
                          height="300"
                          width={300}
                          image={CarImg}
                          // alt="green iguana"
                        />
                        <Typography sx={{pt:1}} color={'white'} variant="h4">
                          Admin side
                        </Typography>
                        <CardContent>
                          <Typography color={'#868687'} variant="h5" component="div">
                            Webbee will make your product look modern and professional while saving you precious time.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Container>
          </Grid>

        </Box>
      </MainLayout>
    </Box>
  );
}
