import { Box, Drawer, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import Profile from './Profile';

const useStyles=makeStyles({
    header: {
        background: '#00bfa5',
        height: 97,
        color: '#fff',
        display: 'flex',
        '& > *': {
            marginTop: 'auto',
            padding: 15,
            fontWeight: 600
        }
    },
    component: {
        background: '#ededed',
        height: '85%'
    }
});
const InfoDrawer = ({open,setOpen}) => {
    const classes=useStyles();
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <React.Fragment>
            <Drawer open={open} onClose={handleClose}>
                <Box className={classes.header}>
                    <ArrowBack onClick={handleClose} />
                    <Typography>Profile</Typography>
                </Box>
                <Box className={classes.component}>
                    <Profile />
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
 
export default InfoDrawer;