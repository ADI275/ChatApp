import { Box } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import { getConversation } from '../service/api';
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const Chat = () => {
    const {account}=useContext(AccountContext);
    const {person}=useContext(UserContext);
    const [conversation,setConversation]=useState({});

    useEffect(()=>{
        const getConversationDetails=async()=>{
            const data=await getConversation({sender: account.googleId, receiver: person.googleId});
            setConversation(data);
        }
        getConversationDetails();
    },[person.googleId]);
    return (
        <React.Fragment>
            <Box>
                <ChatHeader />
                <Messages person={person} conversation={conversation} />
            </Box>
        </React.Fragment>
    );
}
 
export default Chat;