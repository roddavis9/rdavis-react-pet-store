import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPrice: 0,
    itemsInCart: 0

};

const commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_CAT:
            return {
                ...state,
                // displayedItems:
            };
        case actionTypes.REMOVE_CAT:
            return {

            };
        default:
            return state;
    }

};

export default commonReducer;
