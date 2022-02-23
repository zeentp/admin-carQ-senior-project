import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Mechanic from './Mechanic';
import Home from './Home';
import Login from './Login';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
 
  });

function App() {
  
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <CssBaseline />
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="mechanic" element={<Mechanic />} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
