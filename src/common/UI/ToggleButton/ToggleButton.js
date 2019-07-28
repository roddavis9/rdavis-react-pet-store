import React from 'react';
import FontAwesome from 'react-fontawesome';
import Aux from '../../../hoc/Aux/Aux';

import classes from './ToggleButton.module.css';

const ToggleButton = (props) => (
    <Aux>

        <div className={classes.ToggleButton} onClick={props.clicked}>
            <FontAwesome name='fas fa-bars fa-2x' />
        </div>
    </Aux>

);

export default ToggleButton;
