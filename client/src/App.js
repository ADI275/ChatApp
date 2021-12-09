import React from 'react';
import Messenger from './Components/Messenger';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';
import UserProvider from './context/UserProvider';
import './App.css';

const App=()=> {
  return (
    <React.Fragment>
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </React.Fragment>
  );
}

export default App;
