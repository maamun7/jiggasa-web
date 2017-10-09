import * as actionType from './actionTypeCons';
import Axios from 'axios';
import * as config from '../_helpers/config';

export const createSignupUser = (data) => {
    return (dispatch) => {
        return Axios.post(config.BASE_URL+"/signup", data)
            .then(response => {
                dispatch(signupSuccess(response.data))
            })
            .catch(error => {
                signupError(error)
               // throw(error);
            });
    };
};



export const  signupSuccess = (response) => { return { type: actionType.SIGNUP_SUCCESS, response } };
export const  signupError = (response) => { return { type: actionType.SIGNUP_ERROR, response } };
