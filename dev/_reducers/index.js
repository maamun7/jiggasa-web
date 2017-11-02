// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './Authentication';
import router from './Router';

export default combineReducers({
    /*signUp: signupReducer,
    signIn: signinReducer,*/
    router
});
