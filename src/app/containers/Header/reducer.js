import * as types from './constants';

const initialState = {
    id: null,
    oauthToken: null,
    loginFail: null,
};

const router = (state = initialState, action) => {
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

        default:
            return state;
    }
};

export default router;
