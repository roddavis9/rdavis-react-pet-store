import React from 'react';
import Gallery from '../Gallery/Gallery';

import classes from './Cats.module.css';

const Cats = (props) => (
    <div className={classes.Cats}>
        <Gallery dataType={"cats"} />
    </div>

);

export default Cats;
