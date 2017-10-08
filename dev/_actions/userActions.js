import * as actionType from './actionTypeCons';
import Axios from 'axios';
import * as config from '../_config';

export const createSignupUser = (data) => {
    return (dispatch) => {
        return Axios.post(config.BASE_URL+"/signup", data)
            .then(response => {
                dispatch(signupSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};



export const  signupSuccess = (response) => { return { type: actionType.SIGNUP_SUCCESS, response } };
