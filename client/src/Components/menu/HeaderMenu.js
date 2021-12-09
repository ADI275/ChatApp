import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React, { useState,useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { clientID } from '../../constants/data';
import { AccountContext } from '../../context/AccountProvider';
import InfoDrawer from '../drawer/InfoDrawer';

const useStyles=makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
});
const HeaderMenu = () => {
    const [open,setOpen]=useState(false);
    const [openDrawer,setOpenDrawer]=useState(false);
    const {setAccount}=useContext(AccountContext);
    const styleclass=useStyles();
    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget); // from material ui documentation of menu
    }
    const onLogoutSuccess=()=>{
        alert("You have been logged out successfully");
        console.clear();
        setAccount(null);
    }
    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }
    return (
        <React.Fragment>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={styleclass.menuItem} onClick={()=>{handleClose();toggleDrawer()}}>Profile</MenuItem>
                <MenuItem className={styleclass.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientID} // google oath client id
                        buttonText='Logout'
                        onLogoutSuccess={onLogoutSuccess}
                        className={styleclass.logout}
                    >  
                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </React.Fragment>
    );
}
 
export default HeaderMenu;