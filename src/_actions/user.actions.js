import * as userConstant from '../_constants';
import { alertActions } from "./"
import Axios from 'axios';
import * as config from '../_utils/CommonUtils';

const register = (user) => {
    return dispatch => {

        dispatch(request(user));

        Axios.post(config.BASE_URL+"/signup", user)
            .then(user => {
                dispatch(success(user));
              //  history.push('/');

            })
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            });
    };

    function request (user) { return { type: userConstant.REGISTER_REQUEST, user } };
    function success (user) { return { type: userConstant.REGISTER_SUCCESS, user } };
    function failure (error) { return { type: userConstant.REGISTER_ERROR, error } };
};

const login = (user) => {

    dispatch(request(user));

    return dispatch => {
        Axios.post(config.BASE_URL+"/signin", user)
            .then(user => {
                dispatch(success(user));
                history.push('/');
            })
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            });
    };

    function request (user) { return { type: userConstant.LOGIN_REQUEST, user } };
    function success (user) { return { type: userConstant.LOGIN_SUCCESS, user } };
    function failure (error) { return { type: userConstant.LOGIN_ERROR, error } };
};

export const userActions = {
    signUp: register,
    login
};

