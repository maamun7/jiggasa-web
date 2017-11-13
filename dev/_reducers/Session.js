import * as types from '../_constants/ActionTypes';

const initialState = {
    id: null,
    oauthToken: null,
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_ROUTE:
      return {
        ...state,
        route: action.route,
      };

    default:
      return state;
  }
};

export default router;