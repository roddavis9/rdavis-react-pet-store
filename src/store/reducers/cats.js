import * as actionTypes from '../actions/actionTypes';

const initialState = {
    catData: [
        {
            "_id": "1234567",
            "breed": "mixed",
            "sex": "Female",
            "image": "cat_dyna_female.jpg",
            "name": "Dyna",
            "age": "3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        },
        {
            "_id": "2234567",
            "breed": "mixed",
            "sex": "Female",
            "image": "cat_bella_female.jpg",
            "name": "Bella",
            "age": "5",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        },
        {
            "_id": "3234567",
            "breed": "mixed",
            "sex": "Male",
            "image": "cat_levi_male.jpg",
            "name": "Levi",
            "age": "4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        },
        {
            "_id": "4234567",
            "breed": "mixed",
            "sex": "Male",
            "image": "cat_chex_male.jpg",
            "name": "Chex",
            "age": "1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        },
        {
            "_id": "5234567",
            "breed": "mixed",
            "sex": "Male",
            "image": "cat_wyatt_male.jpg",
            "name": "Wyatt",
            "age": "6",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        },
        {
            "_id": "6234567",
            "breed": "mixed",
            "sex": "Female",
            "image": "cat_gamora_female.jpg",
            "name": "Gamora",
            "age": "2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "available": true
        }
    ]

};

const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CATS:
            return {
                ...state,
                catData: state.catData.concat(state.catData)
            };
        case actionTypes.ADD_CAT:
            return {
                ...state,
                // displayedItems:
            };
        case actionTypes.REMOVE_CAT:
            return {
                ...state,
                // displayedItems:
            };
        default:
            return state;
    }

};

export default catReducer;
