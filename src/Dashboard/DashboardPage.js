import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';



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
                <Box sx={{ p: 3 }}>
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
        <Box sx={{ width: '100%', pl: 40 }}>
            <Paper sx={{ pt: 20, p: 5, width: '95%', backgroundColor: '#8aacc8' , border: "2px solid", borderColor: '#3864F8',  }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs textColor='' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ color: 'white' }} label="Pending" {...a11yProps(0)} />
                        <Tab sx={{ color: '#003c8f' }} label="On track" {...a11yProps(1)} />
                        <Tab sx={{ color: 'green' }} label="Completed" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Table1></Table1>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Table2></Table2>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Table3></Table3>
                </TabPanel>
            </Paper>
        </Box>
    );
}