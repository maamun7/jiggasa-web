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

const loginFailure = msg => ({
    type : types.LOGIN_FAILURE,
    msg
});

const fetchSessionUserSuccess = (id, entities) => ({
    type: types.FETCH_SESSION_USER_SUCCESS,
    id,
    entities,
});

const fetchSessionUser = oauthToken => async (dispatch) => {
    const response = await callGetApi(`${utils.BASE_HOST}oauth_token`);
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

export const login = (inputs) => async (dispatch) => {
    const response = await callPostApi(`${utils.BASE_HOST}signin`, inputs, false);
    const { success, msg, token, name, email  } = response;
    if (success) {
        //Save token to local storage
        localStorage.setItem('oauth', JSON.stringify(token));

        dispatch(loginSuccess(token));
        dispatch(fetchSessionData(token));
    } else {
        dispatch(loginFailure(msg));
    }
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