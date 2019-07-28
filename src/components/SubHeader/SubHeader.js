import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import CartSummary from './CartSummary/CartSummary';
import classes from './SubHeader.module.css';

const tempStyle = {
    backgroundColor: '#fff'
};

const subHeader = (props) => (
    <Aux style={tempStyle}>
        <div className={classes.SubHeader}>
            <div className={classes.slogan + ' ' + classes.DesktopOnly}>
                <h5>We have the perfect companion for you and your family!</h5>
            </div>
            <div>
                <CartSummary />
            </div>
            <div>
                Login
            </div>
        </div>
    </Aux>
);


export default subHeader;
