// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './reducers/Authentication';
import router from './reducers/Router';
import session from './reducers/Session';
import entities from './reducers/Entities';

export default combineReducers({
    /*signUp: signupReducer,
    signIn: signinReducer,*/
    entities,
    router,
    session
});
