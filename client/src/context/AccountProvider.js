import React, { useEffect, useRef, useState } from 'react';
import { createContext } from 'react';
import { io } from 'socket.io-client';

export const AccountContext=createContext(null);
const AccountProvider = ({children}) => {
    const [account,setAccount]=useState(null);
    const [activeUsers,setActiveUsers]=useState([]);
    const [newMessageFlag,setNewMessageFlag]=useState(false);

    const socket=useRef();

    useEffect(()=>{
        socket.current=io('ws://localhost:9000'); // connecting the client with the socket
    },[]);
    return (
        <AccountContext.Provider // value is used so that we can pass the state to complete project
            value={{account,setAccount,socket,setActiveUsers,activeUsers,newMessageFlag,setNewMessageFlag}}
        >
            {children}
        </AccountContext.Provider>
    );
}
 
export default AccountProvider;