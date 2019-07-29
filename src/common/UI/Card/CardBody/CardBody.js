import React from 'react';
import AuxWrapper from '../../../../hoc/AuxWrapper/AuxWrapper';


import classes from './CardBody.module.css';

const CardBody = (props) => (
    <AuxWrapper>
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
    </AuxWrapper>
);

export default CardBody;
