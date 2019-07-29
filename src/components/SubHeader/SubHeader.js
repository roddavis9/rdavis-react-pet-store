import React from 'react';

import AuxWrapper from '../../hoc/AuxWrapper/AuxWrapper';
import CartSummary from './CartSummary/CartSummary';
import classes from './SubHeader.module.css';

const tempStyle = {
    backgroundColor: '#fff'
};

const subHeader = (props) => (
    <AuxWrapper style={tempStyle}>
        <div className={classes.SubHeader}>
            <div className={classes.slogan + ' ' + classes.DesktopOnly}>
                <span className={classes.slogan}>We have the perfect companion for you and your family!</span>
            </div>
            <div>
                <CartSummary />
            </div>
            <div>
                Login
            </div>
        </div>
    </AuxWrapper>
);


export default subHeader;
