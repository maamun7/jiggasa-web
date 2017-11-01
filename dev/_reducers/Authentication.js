import {saveAuthInfo} from '../_utils/helper';
export const signinReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            saveAuthInfo(action.response);
            return { ...state, res : action.response }
        case 'LOGIN_ERROR':
            return { ...state, res : action.response }
        default:
            return state;
    }
};