import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Booking from './Booking';
import Pending from './Pending';
import Ontrack from './Ontrack';
import Completed from './Completed';
import Reject from './Rejected';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3  }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', pl: 22 ,pb:8.5 }}>
            <Paper elevation={6} sx={{ pt: 20, p: 5, width: '95%', backgroundColor: 'white' ,   }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs  textColor='' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ color: 'grey' }} label="Booking" {...a11yProps(0)} />
                        <Tab sx={{ color: '#6a1b9a' }} label="Pending" {...a11yProps(3)} />
                        <Tab sx={{ color: '#003c8f' }} label="On track" {...a11yProps(1)} />
                        <Tab sx={{ color: 'green' }} label="Completed" {...a11yProps(2)} />
                        <Tab sx={{ color: 'red' }} label="Rejected" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Booking></Booking>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Pending></Pending>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Ontrack></Ontrack>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Completed></Completed>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Reject></Reject>
                </TabPanel>
            </Paper>
        </Box>
    );
}