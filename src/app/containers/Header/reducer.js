import * as types from './constants';

const initialState = {
    id: null,
    oauthToken: null,
    loginFail: null,
};

const header = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                oauthToken: action.oauthToken,
            };

        case types.LOGIN_FAILURE:
            return {
                ...state,
                loginFail: action.msg,
            };

        case types.FETCH_SESSION_USER_SUCCESS:
            return {
                ...state,
                id: action.id
            };

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                signupSuccess: action.msg,
            };

        case types.SIGNUP_FAILURE:
            return {
                ...state,
                signupFail: action.id
            };

        default:
            return state;
    }
};

export default header;
