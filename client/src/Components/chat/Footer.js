import { Box, InputBase, makeStyles } from '@material-ui/core';
import { AttachFile, EmojiEmotionsOutlined, Mic } from '@material-ui/icons';
import React from 'react';

const useStyles=makeStyles(theme=>({
    footer: {
        height: 55,
        background: '#ededed',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        '& > *': {
            margin: 5,
            color: '#919191'
        }
    },
    clipIcon: {
        transform: 'rotate(40deg)'
    },
    searchBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        width: '85%'
    },
    inputRoot: {
        // color: 'inherit'
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: 25,
        fontSize: 14,
        width: '100%',
        height: 20
    }
}));
const Footer = ({sendText,value,setValue}) => {
    const classes=useStyles();
    return (
        <React.Fragment>
            <Box className={classes.footer}>
                <EmojiEmotionsOutlined /> {/* icons from material ui */}
                <AttachFile className={classes.clipIcon} />
                <Box className={classes.searchBox}>
                    <InputBase placeholder='Type a message'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{'aria-label': 'search'}}
                        onKeyPress={sendText}
                        onChange={(e)=>setValue(e.target.value)}
                        value={value}
                    />
                </Box>
                <Mic />
            </Box>
        </React.Fragment>
    );
}
 
export default Footer;