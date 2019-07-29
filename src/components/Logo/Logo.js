import React from 'react';
import Aux from '../../hoc/Aux/Aux'

import storeLogo from '../../assets/images/pet-store-logo.jpg'
import classes from './Logo.module.css';


const logo = (props) => (
    <Aux>
        <div className={classes.Logo}>
            <img src={storeLogo} alt="Rod's Pet Emporium Logo" />&nbsp;<span className={classes.logoText}>Rod's Pet Emporium</span>
        </div>
        <div>

        </div>
    </Aux>

);

export default logo;
