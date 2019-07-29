import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './NavItem.module.css';

const navItem = (props) => (
    <li className={classes.NavItem}>
        <NavLink
            to={props.link}
            activeClassName={classes.active}
            exact>
            {props.children}
        </NavLink>
    </li>
);

export default navItem;
