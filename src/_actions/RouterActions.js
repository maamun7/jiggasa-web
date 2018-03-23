/* global history */
/* global location */
/* global window */
import { actionTypes } from '../_constants/ActionTypes';
import { compileHash, parseRoute } from '../_utils/RouterUtils';

const pushState = (route) => {
  const hash = compileHash(route);
  if (location.hash !== hash) {
    history.pushState({ route }, '', hash);
  }
};

export const navigateTo = (route, shouldPushState = true) => {
  if (shouldPushState) {
    pushState(route);
  }

  return {
    type: actionTypes.CHANGE_ROUTE,
    route,
  };
};

export const navigateBack = e => (dispatch) => {
  const { state } = e;
  if (state) {
    const { route } = state;
    dispatch(navigateTo(route, false));
  }
};

export const initRouter = paths => (dispatch) => {
  window.onpopstate = (e) => {
    dispatch(navigateBack(e));
  };

  const hash = location.hash ? location.hash.slice(2) : '';
  const route = parseRoute(hash, paths);


    console.log("hash: ", hash);
  return dispatch(navigateTo(route));
};
