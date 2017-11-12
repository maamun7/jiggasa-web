import * as types from '../constants/ActionTypes';

const initialState = {
    id: null,
    oauthToken: null,
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ROUTE:
      return {
        ...state,
        route: action.route,
      };

    default:
      return state;
  }
};

export default router;
