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

export const search = keyword => async (dispatch) => {
   /* const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));*/
};
