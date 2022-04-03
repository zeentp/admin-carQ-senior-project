import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertBar({ alertOpen, title, severity,handleCloseFuc }) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    return (
        <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleCloseFuc}>
            <Alert onClose={handleCloseFuc} severity={severity} sx={{ width: '100%' }}>
            {title}
            </Alert>
        </Snackbar>
    );


}
AlertBar.propTypes = {
    alertOpen: PropTypes.bool,
    severity: PropTypes.string,
    title: PropTypes.string,
    handleCloseFuc:PropTypes.func,

};
export default AlertBar;