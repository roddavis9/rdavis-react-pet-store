import React from 'react';

import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import ToggleButton from '../../common/UI/ToggleButton/ToggleButton';

import classes from './Header.module.css';

const header = (props) => (
    <header className={classes.Header}>
        <ToggleButton clicked={props.toggleButtonClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default header;
