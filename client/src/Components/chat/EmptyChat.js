import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles({
    component: {
        background: '#f8f9fa',
        height: '100%',
        padding: '50px 0',
        textAlign: 'center'
    },
    image: {
        width: 420
    }
});
const EmptyChat = () => {
    const url='https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';
    const classes=useStyles();
    return (
        <React.Fragment>
            <Box className={classes.component}>
                <img className={classes.image} src={url} alt='empty' />
            </Box>
        </React.Fragment>
    );
}
 
export default EmptyChat;