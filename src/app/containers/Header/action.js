//import * as types from '../_constants/ActionTypes';
import { callApi, callGetApi, callPostApi } from '../../../utils/AppUtils';
import * as consts from './constants';
import * as homeConsts from '../Home/constants';

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

export const search = (keyword) => async (dispatch) => {
   // console.log('calling search api :', keyword);
    const response = await callGetApi(consts.SEARCH_URL, {keyword : keyword }, false);
    const { success, data } = response;
   // console.log('data :', data);
    if (success) {
        dispatch(searchResponse({success, data}));
    } else {
        dispatch(searchFailure({success, data}));
    }
};

const searchResponse = responseObj => ({
    type : homeConsts.SEARCH_RESPONSE,
    data : responseObj.data
});

const searchFailure = msg => ({
    type : homeConsts.SEARCH_FAILURE,
    msg : msg.msg
});
