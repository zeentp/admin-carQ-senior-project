import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Details, Update } from '@mui/icons-material';
// Admin side
import Navbar from './component/Navbar';
import Mechanic from './Page/Mechanic';
import Home from './Page/Home';
import Login from './Login';
import UserUpdate from './Page/UserUpdate';
import TestTable from './TestTable';
import Create from './Create';
import Detail from './Page/Detail';
import Account from './Page/Account';
import Test from './Page/Test';
import Landing from './Page/Landing';
import Admin from './Page/Admin';
import DashboardPage from './Dashboard/DashboardPage';
// Client side

import ClientHome from './client/page/ClientHome';
import Booking from './client/page/Booking';
import AppBarClient from './client/component/AppBarClient'
const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "sans-serif"].join(","),
    fontSize:16
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not($disabled):before': {
          backgroundColor: 'red',
        },
      },
    },
    MuiChip: {
      root: {
        padding: '3px 4px',
        fontFamily: "sans-serif",
        fontSize: "40"
      },
    },
  },
});
const pathname = window.location.pathname

function App() {

  useEffect(() => {
    // console.log(pathname !== '/detail/:id')
    // console.log(pathname.includes('/detail/:id'));
    console.log(pathname)
    console.log('token', token)
  }, []);
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Login />
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {pathname === '/' ? <box></box>
          : pathname === '/login' ?
            <box></box>
            :
            <Navbar></Navbar>
          // <AppBarClient></AppBarClient>
          // <box></box>

        }
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="testTable" element={<TestTable />} />
          <Route path="mechanic" element={<Mechanic />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="create" element={<Create />} />
          <Route path='/update/:id' element={<UserUpdate />} />
          <Route path="dashboardPage" element={<DashboardPage />} />
          <Route path="test" element={<Test />} />
          <Route path="account" element={<Account />} />
          <Route path="admin" element={<Admin />} />

          {/* Client */}
          <Route path="/client/clientHome" element={<ClientHome />} />
          <Route path="booking" element={<Booking />} />



        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
