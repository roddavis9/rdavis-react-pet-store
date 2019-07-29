import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';

import classes from './Card.module.css';


const Card = (props) => (
    <Aux>
        <div className={classes.Card}>
            <div className={classes.CardHeader}>
                <CardHeader image={"cat_bella_female.jpg"}/>
            </div>
            <div className={classes.CardBody}>
                <CardBody name={"Bella"} age={"2"} sex={"Female"} />
            </div>
            <div className={classes.CardFooter}>
                <CardFooter />
            </div>
        </div>
    </Aux>
);


export default Card;
