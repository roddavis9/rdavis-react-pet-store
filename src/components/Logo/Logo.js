import React from 'react';

import storeLogo from '../../assets/images/pet-store-logo.jpg'
import classes from './Logo.css';


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={storeLogo} alt="Rod's Pet Emporium Logo" />
    </div>
);

export default logo;
