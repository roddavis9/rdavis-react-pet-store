import React from 'react';
import AuxWrapper from '../../../hoc/AuxWrapper/AuxWrapper';

import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';

import classes from './Card.module.css';


const Card = (props) => (
    <AuxWrapper>
        <div className={classes.Card}>
            <div className={classes.CardHeader}>
                <CardHeader image={props.image}/>
            </div>
            <div className={classes.CardBody}>
                <CardBody name={props.name} age={props.age} sex={props.sex} />
            </div>
            <div className={classes.CardFooter}>
                <CardFooter id={props.key}/>
            </div>
        </div>
    </AuxWrapper>
);


export default Card;
