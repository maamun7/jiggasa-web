import * as consts from './constants';

const initialState = {
    signupResponse: null,
    signupSuccess: null,
    signupFail: null,
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

        default:
            return state;
    }
};

export default header;
