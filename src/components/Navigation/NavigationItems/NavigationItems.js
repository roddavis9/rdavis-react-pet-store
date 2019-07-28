import React from 'react';

import classes from './NavigationItems.module.css'
import NavItem from './NavItem/NavItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" active>Cats</NavItem>
    <NavItem link="/">Dogs</NavItem>
    <NavItem link="/">Supplies</NavItem>
  </ul>
);

export default navigationItems;
