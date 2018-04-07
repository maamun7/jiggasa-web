import * as consts from './constants';

const initialState = {
    id: null,
    oauthToken: null,
    signinFail: null,
};

const session = (state = initialState, action) => {
    switch (action.type) {
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
                id: action.id,
                entities: action.entities
            };

        default:
            return state;
    }
};

export default session;
