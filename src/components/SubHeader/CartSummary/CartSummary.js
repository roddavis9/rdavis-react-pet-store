import React from 'react';
import AuxWrapper from '../../../hoc/AuxWrapper/AuxWrapper';
import FontAwesome from 'react-fontawesome';

import classes from './CartSummary.module.css';


const CartSummary = () => (
    <AuxWrapper>
        <div className={classes.CartSummary}>
            <div>
                <FontAwesome name='fas fa-shopping-cart fa-2x' />
            </div>
            <div className={classes.itemText}>3 Items</div>
            <div className={classes.itemText}>|&nbsp;&nbsp;$0</div>

        </div>
    </AuxWrapper>
);

export default CartSummary;
