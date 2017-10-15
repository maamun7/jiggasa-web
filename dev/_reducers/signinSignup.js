import {saveAuthInfo} from '../_helpers/helper';
export const signupReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return {...state, res : action.response}
        case 'SIGNUP_ERROR':
            return {...state, res : action.response}
        default:
            return state;
    }
};

export const signinReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            saveAuthInfo(action.response);
            return {...state, res : action.response}
        case 'SIGNIN_ERROR':
            return {...state, res : action.response}
        default:
            return state;
    }
};