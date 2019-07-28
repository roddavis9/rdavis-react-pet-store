import React from 'react';

import Logo from '../Logo/Logo';


import './Header.css';

const header = (props) => (
    <header className={`Header`}>
        <div>hamburger</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);


export default header;
