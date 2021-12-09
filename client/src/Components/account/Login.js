import React from 'react';
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { clientID } from '../../constants/data';
import { addUser } from '../service/api';

const useStyles=makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0 56px 56px'
    },
    qrCode: {
        height: 264,
        width: 264,
        padding: '50px 0 0 50px'
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list: {
        '& > *': { // this is used to apply css to all child of the paprent in material-ui
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
});
const style={ // inorder to use add styles to Dialog using withStyles
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '10%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
};

const Login = ({classes}) => { // classes is passed as prop for using style as login is wrapped ubder withStyes
    const styleclass=useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const {account,setAccount}=useContext(AccountContext);
    
    const onLoginSuccess=async(res)=>{
        console.log('logged in',res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj); // this is making post req
    }
    const onLoginFailure=()=>{
        console.log('loggin failed');
    }
    return (
        <React.Fragment>
            <Dialog
                classes={{paper: classes.dialogPaper}}
                open={true}
                BackdropProps={{style: {backgroundColor: 'unset'}}}    
            >
                <Box className={styleclass.component}>
                    <Box className={styleclass.leftComponent}>
                        <Typography className={styleclass.title}>To use WhatsApp on your computer:</Typography>
                        <List className={styleclass.list}>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Point your phone to this Screen to capture the code</ListItem>
                        </List>
                    </Box>
                    <Box style={{position: 'relative'}}>
                        <img src={qrurl} className={styleclass.qrCode} alt='qr'></img>
                        <Box style={{position: 'absolute',left: '50%',top: '50%'}}>
                            <GoogleLogin
                                clientId={clientID} // google oath client id
                                buttonText=''
                                isSignedIn={true}
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Box>
                    </Box> {/* box is like a div which is used so that we can use maetrial-ui css */}
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
 
export default withStyles(style)(Login);