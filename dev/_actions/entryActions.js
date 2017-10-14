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

    function signupSuccess (response) { return { type: actionType.SIGNUP_SUCCESS, response } };
    function signupError (response) { return { type: actionType.SIGNUP_ERROR, response } };
};

export const makeSigninUser = (data) => {
    return (dispatch) => {
        return Axios.post(config.BASE_URL+"/signin", data)
            .then(response => {
                dispatch(signinSuccess(response.data))
            })
            .catch(error => {
                signinError(error)
               // throw(error);
            });
    };

    function signinSuccess (response) { return { type: actionType.SIGNIN_SUCCESS, response } };
    function signinError (response) { return { type: actionType.SIGNIN_ERROR, response } };
};

