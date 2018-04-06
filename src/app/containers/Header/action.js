//import * as types from '../_constants/ActionTypes';
import { callApi, callGetApi, callPostApi } from '../../../utils/AppUtils';
import * as consts from './constants';

export const signUp = (inputs) => async (dispatch) => {
    const response = await callPostApi(consts.SIGNUP_URL, inputs, false);
    const { success, msg } = response;
    if (success) {
        dispatch(signUpResponse({success, msg}));
        dispatch(signUpSuccess({success, msg}));
    } else {
        dispatch(signUpFailure({success, msg}));
    }
};

const signUpResponse = responseObj => ({
    type : consts.SIGNUP_RESPONSE,
    msg : responseObj
});

const signUpSuccess = msg => ({
    type : consts.SIGNUP_SUCCESS,
    msg : msg.msg
});

const signUpFailure = msg => ({
    type : consts.SIGNUP_FAILURE,
    msg : msg.msg
});

const fetchSessionUserSuccess = (id, entities) => ({
    type: types.FETCH_SESSION_USER_SUCCESS,
    id,
    entities,
});

const fetchSessionUser = oauthToken => async (dispatch) => {
    const response = await callGetApi(consts.OAUTH_URL);
    const { success, id, name, email  } = response;
    if (success) {
        const entities = {
            name: name,
            email: email
        };

        dispatch(fetchSessionUserSuccess(id, entities));
    }
};

const fetchSessionData = oauthToken => (dispatch) => {
    dispatch(fetchSessionUser(oauthToken));
};

export const initAuth = () => (dispatch) => {
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(loginSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }
};

export const signIn = (inputs) => async (dispatch) => {
    const response = await callPostApi(consts.SIGNIN_URL, inputs, false);
    console.log('LOGIN SERVER RES :', response);
    const { success } = response;
    if (success) {
        const { token } = response;
        //Save token to local storage
        localStorage.setItem('oauth', JSON.stringify(token));

        dispatch(signinSuccess(token));
        dispatch(fetchSessionData(token));
    } else {
        const { msg } = response;
        dispatch(signinFailure(msg));
    }
};

const signinSuccess = oauthToken => ({
    type : types.LOGIN_SUCCESS,
    oauthToken
});

const signinFailure = msg => ({
    type : types.LOGIN_FAILURE,
    msg
});

export const signOut = () => (dispatch) => {
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        dispatch(signinSuccess(oauth.token));
        dispatch(fetchSessionData(oauth.token));
    }
};

export const search = keyword => async (dispatch) => {
   /* const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));*/
};
