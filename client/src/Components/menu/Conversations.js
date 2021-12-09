import { Box, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { getUsers } from '../service/api';
import Conversation from './Conversation';

const useStyles=makeStyles({
    component: {
        height: '81vh',
        overflow: 'overlay'
    }
});
const Coversations = ({text}) => {
    const {account,socket,setActiveUsers}=useContext(AccountContext);
    const [users,setUsers]=useState([]);
    const classes=useStyles();

    useEffect(()=>{
        const fetchData=async()=>{
            const data=await getUsers();
            const filteredData=data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase())); // includes is used to filter based on some letters
            setUsers(filteredData);
        }
        fetchData();
    },[text]);
    useEffect(()=>{
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users);
        })
    },[account]);

    return (
        <React.Fragment>
            <Box className={classes.component}>
                {
                    users.map(user=>(
                        (user.googleId!==account.googleId)&&(<Conversation key={user.googleId} user={user} />)
                    ))
                }
            </Box>
        </React.Fragment>
    );
}
 
export default Coversations;