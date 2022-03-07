import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Mechanic from './Mechanic';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import UserUpdate from './UserUpdate';
import TestTable from './TestTable';
import Create from './Create';
import Detail from './Detail';




import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Details, Update } from '@mui/icons-material';

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
        <Route path="TestTable" element={<TestTable />} />
        <Route path="mechanic" element={<Mechanic />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="detail" element={<Detail />} />
        <Route path="create" element={<Create />} />
        <Route path='/update/:id' element={<UserUpdate/>} />

      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
