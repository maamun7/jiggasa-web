import { routerCons, actionTypes } from '../_constants';

const initialState = {
  route: { ...routerCons.INITIAL_ROUTE },
};

const router = (state = initialState, action) => {

    console.log("Console Baaaaaa : ", state);

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
