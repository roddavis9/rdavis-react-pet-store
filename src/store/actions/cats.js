import * as actionTypes from './actionTypes';
import axios from "../../axios-server";

export const getCats = () => {
    return dispatch => {
        axios.get('/cats/cats.mockdata.json')
            .then(res => {
                console.log('cat res', res);

                return {
                    type: actionTypes.GET_CATS,
                    data: res.data
                }

            })
            .catch(err => {
                console.log('cat dispatch error', err);
            })
    }
};

