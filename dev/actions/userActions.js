import * as actionType from './actionTypeCons';
import Axios from 'axios';

let apiUrl = 'http://localhost:8000/v1';

export const createSignupUser = (data) => {
    return (dispatch) => {
        return Axios.post(apiUrl+"/signup", data)
            .then(response => {
                dispatch(signupSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };

    const signupSuccess = (response) => {



        return {type: actionType.SIGNUP_SUCCESS, response } };
};

/*
export const createSignupSuccess = (response) => {
    return {
        type: actionType.SIGNUP_SUCCESS,
        response
    }
};*/
