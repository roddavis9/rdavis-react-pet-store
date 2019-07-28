import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import FontAwesome from 'react-fontawesome';

import classes from './CartSummary.module.css';


const CartSummary = () => (
    <Aux>
        <div className={classes.CartSummary}>
            <div>
                <FontAwesome name='fas fa-shopping-cart fa-2x' />
            </div>
            <div className={classes.itemText}>3 Items</div>
            <div className={classes.itemText}>|&nbsp;&nbsp;$0</div>

        </div>
    </Aux>
);

export default CartSummary;
