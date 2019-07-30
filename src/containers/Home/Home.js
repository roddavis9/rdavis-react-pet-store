import React from 'react';

import AuxWrapper from '../../hoc/AuxWrapper/AuxWrapper';
import classes from './Home.module.css';

const Home = (props) => (
    <AuxWrapper>
        <div className={classes.Home}>
            <div>
                <h2>Welcome to Rod's Pet Emporium</h2>
            </div>
            <div>
                <h5>Please select a link in the navigation above to find a loving new addition for your home.</h5>
            </div>
        </div>
    </AuxWrapper>
);

export default Home;
