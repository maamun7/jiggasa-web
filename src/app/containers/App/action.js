//import * as types from '../_constants/ActionTypes';
import { callApi, callGetApi, callPostApi } from '../../../utils/AppUtils';
import * as consts from './constants';

const fetchSessionUserSuccess = (id, entities) => ({
    type: consts.FETCH_SESSION_USER_SUCCESS,
    id,
    entities
});

const fetchSessionUser = oauthToken => async (dispatch) => {
    const response = await callGetApi(consts.OAUTH_URL);
    console.log('Check auth :', response);
    const { success, id, entities  } = response;
    if (success) {
        dispatch(fetchSessionUserSuccess(id, entities));
    }
};

const fetchSessionData = oauthToken => (dispatch) => {
    dispatch(fetchSessionUser(oauthToken));
};

export const initAuth = () => (dispatch) => {
    const token = JSON.parse(localStorage.getItem('oauth'));
    if (token != null) {
        dispatch(signinSuccess(token));
        dispatch(fetchSessionData(token));
    }
};

export const signIn = (inputs) => async (dispatch) => {
    const response = await callPostApi(consts.SIGNIN_URL, inputs, false);
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
    type : consts.SIGNIN_SUCCESS,
    oauthToken
});

const signinFailure = msg => ({
    type : consts.SIGNIN_FAILURE,
    msg
});

const getSignOut = () => ({
    type : consts.SIGNOUT
});

export const signOut = () => (dispatch) => {
    console.log('DEBUGG :', 'Call signout function !');
    localStorage.setItem('oauth', JSON.stringify(''));
    dispatch(getSignOut());
};
