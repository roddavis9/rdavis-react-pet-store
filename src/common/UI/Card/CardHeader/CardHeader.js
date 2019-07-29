import React from 'react';

import classes from './CardHeader.module.css'


const CardHeader = (props) => (

    <div className={classes.CardHeader}>
        <img src={require(`../../../../assets/images/${props.image}`)} alt="" className={classes.animalImage}/>
    </div>
);

export default CardHeader;
