import React, { useContext } from 'react';
import { Box, Dialog, makeStyles, withStyles } from '@material-ui/core';
import Menu from './menu/Menu';
import Chat from './chat/Chat';
import { UserContext } from '../context/UserProvider';
import EmptyChat from './chat/EmptyChat';

const style={ // inorder to use add styles to Dialog using withStyles
    dialogPaper: {
        height: '93.5%',
        width: '91%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
};
const useStyle=makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)',
        width: '70%',
        minWidth: 300,
        height: '100%'
    }
})
const ChatBox = ({classes}) => {
    const styleclass=useStyle();
    const {person}=useContext(UserContext);
    return (
        <React.Fragment>
            <Dialog
                open={true}
                classes={{paper: classes.dialogPaper}}
                BackdropProps={{style: {backgroundColor: 'unset'}}}
            >
                <Box className={styleclass.component}>
                    <Box className={styleclass.leftComponent}>
                        <Menu />
                    </Box>
                    <Box className={styleclass.rightComponent}>
                        {
                            Object.keys(person).length>0?<Chat />: <EmptyChat />
                        }
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
 
export default withStyles(style)(ChatBox);