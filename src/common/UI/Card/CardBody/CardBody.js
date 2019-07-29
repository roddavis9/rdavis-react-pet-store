import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';


import classes from './CardBody.module.css';

const CardBody = (props) => (
    <Aux>
        <div className={classes.AnimalName}>
            {props.name}
        </div>
        <div className={classes.captionRow}>
            <div>
                Age:&nbsp;&nbsp;{props.age}
            </div>
            <div>
                Sex:&nbsp;&nbsp;{props.sex}
            </div>
        </div>
    </Aux>
);

export default CardBody;
