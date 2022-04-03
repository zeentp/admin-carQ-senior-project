import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { URL as url } from './Constant';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AlertBar from './component/AlertBar';




const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const axios = require("axios");
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isUserEmpty, setIsUserEmpty] = useState();
  const [isPassEmpty, setIsPassEmpty] = useState();
  const [isLoading, setIsLoading] = useState();
  const [successAlertOpen, setSuccessAlertOpen] = React.useState(false);
  const [failAlertOpen, setFailAlertOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessAlertOpen(false);
    setFailAlertOpen(false);
  };
  const handleSubmit = (event) => {
    setIsLoading(true)
    if (username === '') {
      setIsUserEmpty(true)
      setIsLoading(false)
    } else {
      setIsUserEmpty(false)
    }
    if (password === '') {
      setIsPassEmpty(true)
      setIsLoading(false)
    } else {
      setIsPassEmpty(false)
    }

    if (username !== '' && password !== '') {
      setIsUserEmpty(false)
      setIsPassEmpty(false)
    }
    event.preventDefault();
    var data = {
      username: username,
      password: password
    }
    if (username !== '' && password !== '') {
      axios.post(url + "/api/login", data).then((res) => {
        console.log(res);
        setIsLoading(false)
        if (res.data.status === 'ok') {
          setSuccessAlertOpen(true)
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.href = '/home';
          }, 2000)
        } else {
          setFailAlertOpen(true)
          console.log('error')
        }
      }
      );
    }

  };
  const handleOnClick = () => {
    // const data = new FormData(event.currentTarget);


    // localStorage.setItem('accessToken','test')
    // window.location.href = "/home";
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/it-yourself-video-blogger-cartoon-icon-with-character-mechanic-computer-screen_1284-63878.jpg?t=st=1648915468~exp=1648916068~hmac=acc5be6e201d7318561353b303472bb5a81ccc7482b043dc4bb6b1d8a23baf03&w=900)',
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundImage: 'url(https://img.freepik.com/free-vector/mechanic-background-design_1322-73.jpg?t=st=1648915468~exp=1648916068~hmac=b030db8923894ac0e2bdd8e9375ede4849abeeccde4fc99ef1a47731674ec8f6&w=826)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{bgcolor: '#C4C5CB',color:'white'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, }}>
              <LockOutlinedIcon color='primary' />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {isLoading && <CircularProgress />}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                error={isUserEmpty}
                helperText={isUserEmpty === true ? 'please fill the username' : ''}
                fullWidth
                id="username"
                label="username"
                name="username"
                // autoComplete="email"
                autoFocus
                onChange={e => setUserName(e.target.value)}
              />
              <TextField
                margin="normal"
                error={isPassEmpty}
                helperText={isPassEmpty === true ? 'please fill the password' : ''}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // InputProps={{
                //   // <-- This is where the toggle button is added.
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <IconButton
                //         aria-label="toggle password visibility"
                //         onClick={handleClickShowPassword}
                //         onMouseDown={handleMouseDownPassword}>
                //         {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                //       </IconButton>
                //     </InputAdornment>
                //   ),
                // }}
                onChange={e => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              // onClick={navigate("home")}

              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Grid>
        <AlertBar title='Login Success' severity="success" handleCloseFuc={handleClose} alertOpen={successAlertOpen} ></AlertBar>
        <AlertBar title='User Not Found' severity="error" handleCloseFuc={handleClose} alertOpen={failAlertOpen} ></AlertBar>

        {/* <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                    Updating
                </Alert>
            </Snackbar> */}
      </Grid>
    </ThemeProvider>
  );
}