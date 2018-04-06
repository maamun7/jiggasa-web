import * as consts from './constants';

const initialState = {
    id: null,
    oauthToken: null,
    signupResponse: null,
    signupSuccess: null,
    signupFail: null,
    signinFail: null,
};

const header = (state = initialState, action) => {
    switch (action.type) {
        case consts.SIGNUP_RESPONSE:
            return {
                ...state,
                signupResponse: action.msg
            };
        case consts.SIGNUP_SUCCESS:
            return {
                ...state,
                signupSuccess: action.msg
            };

        case consts.SIGNUP_FAILURE:
            return {
                ...state,
                signupFail: action.msg
            };
        case consts.SIGNIN_SUCCESS:
            return {
                ...state,
                oauthToken: action.oauthToken,
            };

        case consts.SIGNIN_FAILURE:
            return {
                ...state,
                signinFail: action.msg,
            };

        case consts.FETCH_SESSION_USER_SUCCESS:
            return {
                ...state,
                id: action.id
            };

        default:
            return state;
    }
};

export default header;
