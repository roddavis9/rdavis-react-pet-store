import React from 'react';

import Button from '../../Button/Button';

import classes from './CardFooter.module.css';

const CardFooter = (props) => (
    <div className={classes.CardFooter}>
        <Button label={"Adopt"} active fill onClick={''} />
    </div>
);

export default CardFooter;
