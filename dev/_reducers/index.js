// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './Authentication';
import router from './Router';
import session from './Session';
import entities from './Entities';

export default combineReducers({
    /*signUp: signupReducer,
    signIn: signinReducer,*/
    entities,
    router,
    session
});
