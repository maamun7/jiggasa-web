import * as types from '../_constants/ActionTypes';

const initialState = {
    users:{}
};

const entities = (state = initialState, action) => {
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

export default entities;
