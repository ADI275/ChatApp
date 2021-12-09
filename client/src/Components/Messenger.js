import React, { useContext } from 'react';
import Login from './account/Login';
import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox';

const useStyles=makeStyles({
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    component: {
        background: '#DCDCDC',
        height: '100vh'
    },
    header: {
        height: 115,
        background: '#128C7E',
        boxShadow: 'none'
    }
});
const Messenger = () => {
    const classes=useStyles();
    const {account}=useContext(AccountContext);
    return (
        <React.Fragment>
            <Box className={classes.component}>
                <AppBar className={(account)?classes.header:classes.loginHeader}>
                    <Toolbar />
                </AppBar>
                {
                    (account)?<ChatBox />:<Login />
                }
            </Box>
        </React.Fragment>
    );
}
 
export default Messenger;