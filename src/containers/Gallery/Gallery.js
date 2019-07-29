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
        displayedItems: [],
        loading: true
    };


    componentDidMount() {
        let urlPath = '';

        switch (this.props.dataType) {
            case 'cats':
                urlPath = '/cats/cats.mockdata.json';
                break;
            case 'dogs':
                urlPath = '/dogs/dogs.mockdata.json';
                break;
            case 'supplies':
                urlPath = '/supplies/supplies.mockdata.json';
                break;
            default:
                urlPath = '/cats/cats.mockdata.json';
                break;
        }

        const catData = this.props.getCatData();
        console.log('catData', catData);


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

    }



    render () {
        let rowContents = [];

        this.state.displayedItems.map(item => {
            rowContents.push(<div key={item._id} className="col-lg-4 col-md-6 col-sm-12">
                <Card
                    key={item.id}
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
  return {
      cats: state.cats
  }
};

const mapDispatchToProps = dispatch => {
    return {
        getCatData: () => dispatch({type: actionTypes.GET_CATS}),
        onCatAdopted: (catId) => dispatch({type: actionTypes.REMOVE_CAT, _id: catId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
