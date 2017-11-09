import * as types from '../_constants/ActionTypes';
import { callApi } from '../_utils/ApiUtils';
import { userSchema } from '../_constants/Schemas';
import {
    USER_URL,
} from '../_constants/ApiConstants';


const loginSuccess = oauthToken => {
    type : types.LOGIN_SUCCESS,
    oauthToken
};

const fetchSessionUserSuccess = oauthToken => {
    type : types.LOGIN_SUCCESS,
    oauthToken
};

const fetchSessionUser = oauthToken => async (dispatch) => {
    const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));
};

const fetchSessionData = oauthToken => (dispatch) => {
    console.log("oauthToken LOG : ", oauthToken);
    dispatch(fetchSessionUser(oauthToken));
};

export const initAuth = () => (dispatch) => {
    let oauthToken = null;
    const oauth = JSON.parse(localStorage.getItem('auth'));
    if (oauth != null) {
        oauthToken = oauth.token;
    }
    dispatch(loginSuccess(oauthToken));
  //  dispatch(fetchSessionData(oauthToken));

};