import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function Toast({ type, open, message, onClose }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onClose()
    };
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
            }}>
            <Alert
                severity={type}
                variant="filled"
                elevation={6}
                onClose={onClose}
                sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}



