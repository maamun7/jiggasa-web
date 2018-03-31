import { routerCons, actionTypes } from '../constants';

const initialState = {
  route: { ...routerCons.INITIAL_ROUTE },
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
