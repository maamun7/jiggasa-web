import * as types from '../_constants/ActionTypes';

const initialState = {
    id: null,
    oauthToken: null,
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
        return {
            ...state,
            oauthToken: action.oauthToken,
        };

    default:
      return state;
  }
};

export default router;
