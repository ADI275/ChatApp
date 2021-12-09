import React, { createContext, useState } from 'react';

export const UserContext=createContext(null);
const UserProvider = ({children}) => {
    const [person,setPerson]=useState({});
    return (
        <React.Fragment>
            <UserContext.Provider value={{person,setPerson}}>
                {children}
            </UserContext.Provider>
        </React.Fragment>
    );
}
 
export default UserProvider;