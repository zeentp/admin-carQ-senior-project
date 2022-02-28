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
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EngineeringIcon from '@mui/icons-material/Engineering';

const drawerWidth = 240;

export default function Navbar() {
    const [menu, setMenu] = React.useState("");
    const listMenuTitle = ['Home', 'Crew', 'Dashboard']
    let navigate = useNavigate();

    function changePage(page) {
        setMenu(page)
        switch (page) {
            case "Home":
                navigate("home");
                break;
            case "Crew":
                navigate("mechanic");
                break;
            case "Dashboard":
                navigate("testtable");
                break;
            default:
                navigate("/");
        }
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                color=''
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {menu}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                        {/* <IconButton
          edge="end"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        > */}
                        {/* <AccountCircle />
        </IconButton> */}
                    </Box>

                </Toolbar>

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: "#151357",
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
                <Divider />
                <List>
                    {listMenuTitle.map((text, index) => (
                        <ListItem button key={text} onClick={() => changePage(text)} >
                            <ListItemIcon>
                                {index === 0 ? <HomeIcon sx={{ color: "white" }} /> : <EngineeringIcon sx={{ color: "white" }} />}

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
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
        </Box>

    );
}
