import * as actionTypes from './actionTypes';
import axios from "../../axios-server";

export const getDogs = () => {
    return dispatch => {
        axios.get('/dogs/dogs.mockdata.json')
            .then(res => {
                // console.log(res);

                return {
                    type: actionTypes.GET_DOGS,
                    data: res.data
                }

            })
            .catch(err => {
                console.log('dog dispatch error', err);
            })
    }
};

