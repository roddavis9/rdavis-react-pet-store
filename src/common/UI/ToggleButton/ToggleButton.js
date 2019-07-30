import React from 'react';
import FontAwesome from 'react-fontawesome';
import AuxWrapper from '../../../hoc/AuxWrapper/AuxWrapper';

import classes from './ToggleButton.module.css';

const ToggleButton = (props) => (
    <AuxWrapper>

        <div className={classes.ToggleButton} onClick={props.clicked}>
            <FontAwesome name='fas fa-bars fa-2x' />
        </div>
    </AuxWrapper>

);

export default ToggleButton;
