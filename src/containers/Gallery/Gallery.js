import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxWrapper from '../../hoc/AuxWrapper/AuxWrapper';
import SubHeader from '../../components/SubHeader/SubHeader';
import Card from '../../common/UI/Card/Card';
import axios from '../../axios-server';
import * as actionTypes from '../../store/actions/actionTypes';

import classes from './Gallery.module.css';
import Modal from '../../common/UI/Modal/Modal';


class Gallery extends Component {

    state = {
        currentPrice: 0,
        itemsInCart: 0,
        galleryItems: [],
        loading: true
    };


    componentDidMount() {
        let galleryItems = [];

        switch (this.props.dataType) {
            case 'cats':
                galleryItems = this.props.catData;
                break;
            case 'dogs':
                galleryItems = this.props.dogData;
                break;
            case 'supplies':

                // galleryItems = this.props.supplyData;
                break;
            default:
                galleryItems = this.props.catData;
                break;
        }

        this.setState({loading: false, galleryItems: galleryItems});
/*
        axios.get(urlPath)
            .then(res => {
               // console.log(res);
               const itemArray = [];
               for (let key in res.data) {
                   res.data[key].map(obj => {
                       itemArray.push({...obj, id: obj._id});
                       return itemArray;
                   })
               }
               // console.log(itemArray);
               this.setState({loading: false, displayedItems: itemArray});
            })
            .catch(err => {
                this.setState({loading: false});
                console.log('res error', err);
            })
*/
    }



    render () {
        let rowContents = [];

            this.state.galleryItems.map(item => {
            rowContents.push(<div key={item._id} className="col-lg-4 col-md-6 col-sm-12">
                <Card
                    _id={item.id}
                    age={item.age}
                    sex={item.sex}
                    name={item.name}
                    image={item.image}
                />
            </div>);

            return rowContents;
        });


        return (
            <AuxWrapper>
                <Modal>
                    <div>
                        show order summary
                    </div>
                </Modal>
                <div className={classes.Gallery}>
                    <div className={classes.SubHeader}>
                        <SubHeader />
                    </div>
                    <div className={classes.displaySection}>
                        {rowContents}
                    </div>
                </div>
            </AuxWrapper>
        )
    }

}

const mapStateToProps = state => {
    // console.log('state.catData', state);

  return {
      catData: state.catReducer.catData,
      dogData: state.dogReducer.dogData
  }
};

const mapDispatchToProps = dispatch => {
    return {
        getCatData: () => dispatch({type: actionTypes.GET_CATS}),
        onCatAdopted: (catId) => dispatch({type: actionTypes.REMOVE_CAT, _id: catId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
