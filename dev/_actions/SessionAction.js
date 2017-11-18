import * as types from '../_constants/ActionTypes';
import { callGetApi, callPostApi } from '../_utils/ApiUtils';
import { userSchema } from '../_constants/Schemas';
import * as utils from '../_utils/CommonUtils'
import {
    USER_URL,
} from '../_constants/ApiConstants';


const loginSuccess = oauthToken => ({
    type : types.LOGIN_SUCCESS,
    oauthToken
});

const fetchSessionUserSuccess = oauthToken => ({
    type : types.LOGIN_SUCCESS,
    oauthToken
});

const fetchSessionUser = oauthToken => async (dispatch) => {
    const response = await callGetApi(`${utils.BASE_HOST}oauth_token`);

    console.log("fetchSessionUser :", response);


    /*const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));*/
};

const fetchSessionData = oauthToken => (dispatch) => {
    console.log("oauthToken LOG : ", oauthToken);
    dispatch(fetchSessionUser(oauthToken));
};

export const initAuth = () => (dispatch) => {
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(loginSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }
};

export const login = (inputs) => async (dispatch) => {
    const response = await callPostApi(`${utils.BASE_HOST}signin`, inputs, false);
    const { success, msg, token, name, email  } = response;
    if (success) {
        //Save token to local storage
        //localStorage.setItem('oauth', JSON.stringify(authInfo));
        localStorage.setItem('oauth', JSON.stringify(token));

        dispatch(loginSuccess(token));
        dispatch(fetchSessionData(token));
    }


    console.log("Api response: ", response );


    /*const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(loginSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }

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
    };*/
};

export const logout = () => (dispatch) => {
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(loginSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }
};

export const register = () => (dispatch) => {
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(loginSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }
};