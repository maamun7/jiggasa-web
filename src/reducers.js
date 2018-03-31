// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './_reducers/Authentication';
import router from './_reducers/Router';
import session from './_reducers/Session';
import entities from './_reducers/Entities';

export default combineReducers({
    /*signUp: signupReducer,
    signIn: signinReducer,*/
    entities,
    router,
    session
});
