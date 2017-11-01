// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './Authentication';
import { router } from './Router';

export default combineReducers({
    /*signUp: signupReducer,
    signIn: signinReducer,*/
    router
});


/*const navigateBack = function (e) {
  return function (dispatch) {
    const { state } = e;
    if (state) {
      const { route } = state;
      return dispatch(navigateTo(route, false));
    }
  };
};*/