import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    const [text,setText]=useState('');
    return (
        <React.Fragment>
            <Header />
            <Search setText={setText} />
            <Conversations text={text} />
        </React.Fragment>
    );
}
 
export default Menu;