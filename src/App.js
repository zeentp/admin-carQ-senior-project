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
import Account from './Page/Account';
import Test from './Page/Test';
import Landing from './Page/Landing';
import DashboardPage from './Dashboard/DashboardPage';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Details, Update } from '@mui/icons-material';

const theme = createTheme({

});
const pathname = window.location.pathname

function App() {
  useEffect(() => {
    // console.log(pathname !== '/detail/:id')
    // console.log(pathname.includes('/detail/:id'));
    console.log(pathname)
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {pathname === '/' ? <box></box>
          : pathname === '/login' ?
            <box></box>
            // <box></box>
            :
            <Navbar></Navbar>

        }
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="testTable" element={<TestTable />} />
          <Route path="mechanic" element={<Mechanic />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="create" element={<Create />} />
          <Route path='/update/:id' element={<UserUpdate />} />
          <Route path="dashboardPage" element={<DashboardPage />} />
          <Route path="test" element={<Test />} />
          <Route path="account" element={<Account />} />

        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
