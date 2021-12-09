import { Box, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import {newMessage,getMessages} from '../service/api';
import Footer from './Footer';
import Message from './Message';

const useStyles=makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: '50%'
    },
    component: {
        height: '79vh',
        overflowY: 'scroll'
    },
    container: {
        padding: '1px 80px'
    }
});
const Messages = ({person,conversation}) => {
    const classes=useStyles();
    const [value,setValue]=useState()
    const {account,socket,newMessageFlag,setNewMessageFlag}=useContext(AccountContext);
    const [messages,setMessages]=useState([]);
    const [incomingMessage,setIncomingMessage]=useState(null);
    const scrollRef=useRef(); // this is used so that scrollbar is always set to the bottomost or the latest chat

    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    },[]);
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition: 'smooth'});
    },[messages]);
    useEffect(()=>{
        incomingMessage&&conversation?.members?.includes(incomingMessage.sender) && setMessages(prev=>[...prev,incomingMessage]);
    },[incomingMessage,conversation])
    useEffect(()=>{
        const getMessageDetails=async()=>{
            const {data}=await getMessages(conversation._id);
            setMessages(data);
        }
        getMessageDetails();
    },[conversation?._id,person._id,newMessageFlag]);
    const receiverId=conversation?.members?.find(member=>member!==account.googleId); // to get receiverId from conversation object
    const sendText=async(e)=>{
        const code=e.keyCode||e.which; // this tells which type of key is pressed as we have to store the msgs on perss of enter key pnly
        if(!value)
            return;
        if(code===13){ // keyCode for Enter key
            const message={
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            }
            socket.current.emit('sendMessage',{
                senderId: account.googleId,
                receiverId,
                text: value
            })
            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }
    return (
        <React.Fragment>
            <Box className={classes.wrapper}>
                <Box className={classes.component}>
                    {
                        messages&&messages.map(message=>(
                            <Box className={classes.container} ref={scrollRef}>
                                <Message key={message} message={message} />
                            </Box>
                        ))
                    }
                </Box>
                <Footer sendText={sendText} value={value} setValue={setValue} />
            </Box>
        </React.Fragment>
    );
}
 
export default Messages;