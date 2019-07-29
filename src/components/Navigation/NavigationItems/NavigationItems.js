import React from 'react';

import classes from './NavigationItems.module.css'
import NavItem from './NavItem/NavItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/cats" >Cats</NavItem>
    <NavItem link="/dogs">Dogs</NavItem>
    <NavItem link="/supplies">Supplies</NavItem>
  </ul>
);

export default navigationItems;
