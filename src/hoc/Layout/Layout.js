import React from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import Header from '../../components/Header/Header';

const layout = (props) => (
    <Aux>
        <Header />
        <main className={`Content`}>
            {props.children}
        </main>
    </Aux>

);

export default layout;
