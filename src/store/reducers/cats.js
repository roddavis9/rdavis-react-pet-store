import * as actionTypes from '../actions/actionTypes';

const initialState = {
    catData: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CATS:
            return {
                ...state,
                // displayedItems:
            };
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

export default reducer;
