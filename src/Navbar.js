import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Container, Grid, MenuItem, Menu, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";
import { bgcolor } from '@mui/system';
const drawerWidth = 240;
const pathname = window.location.pathname


export default function Navbar() {
    const [menu, setMenu] = React.useState(pathname);
    const listMenuTitle = ['Home', 'Crew', 'Dashboard']
    const [anchorEl, setAnchorEl] = React.useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        // setMenu(pathname)
        // console.log(pathname)
    }, [menu]);
    function changePage(page) {
        setMenu('/'+page)
        switch (page) {
            case "Home":
                navigate("home");
                break;
            case "Crew":
                navigate("mechanic");
                break;
            case "Dashboard":
                navigate("dashboardPage");
                break;
            default:
                navigate("/");
        }
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        window.location.href = '/account';

    };
    
    const handleSignout = () => {
        setAnchorEl(null);
        window.location.href = '/';

    };

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    color=''
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar sx={{ bgcolor: '#1a237e' }} >
                        <Typography sx={{ flexGrow: 1, textAlign: 'start',color:'white' }} variant="h6" noWrap component="div">
                            {menu}
                        </Typography>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                
                            >
                                <AccountCircle sx ={{color:'white'}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
                            </Menu>
                        </div>
                        {/* <Box sx={{ flexGrow: 1 }}>

                        <IconButton
                            edge="end"
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: "#000051",
                        color: "white"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Stack direction="row" spacing={1} sx={{ pr: 6, alignItems: "center" }}>
                        <DriveEtaIcon sx={{ fontSize: 40 }} ></DriveEtaIcon>
                        <Typography>CarQ-Admin</Typography>
                    </Stack>
                </Toolbar>
                <Divider sx={{bgcolor:'white'}}/>
                <List>
                    {listMenuTitle.map((text, index) => (
                        <ListItem button key={text} onClick={() => changePage(text)} >
                            <ListItemIcon>
                                {text === 'Home' ? <HomeIcon sx={{ color: "white" }} /> : text === 'Crew' ? <EngineeringIcon sx={{ color: "white" }} /> : <DashboardIcon sx={{ color: "white" }} />}

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{bgcolor:'white'}}/>
                {/* <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List> */}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
            </Box>
        </Box >

    );
}
