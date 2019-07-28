import React from 'react';
import Aux from '../../hoc/Aux/Aux'

import storeLogo from '../../assets/images/pet-store-logo.jpg'
import './Logo.css';


const logo = (props) => (
    <Aux>
        <div className={`Logo`}>
            <img src={storeLogo} alt="Rod's Pet Emporium Logo" />&nbsp;<span className={`logoText`}>Rod's Pet Emporium</span>
        </div>
        <div>

        </div>
    </Aux>

);

export default logo;
