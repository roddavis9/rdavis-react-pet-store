import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import SubHeader from '../../components/SubHeader/SubHeader';

import classes from './Gallery.module.css';
import Modal from '../../common/UI/Modal/Modal';


class Gallery extends Component {
    state = {
        "currentPrice": 0,
        "itemsInCart": 0,
        "availableCats": {},
        "availableDogs": {},
        "supplies": {}
    };

    render () {
        return (
            <Aux>
                <Modal>

                </Modal>
                <div>
                    <SubHeader />
                </div>

                <div className={classes.Gallery}>
                    image gallery
                </div>
            </Aux>
        )
    }

}

export default Gallery;
