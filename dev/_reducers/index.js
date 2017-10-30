// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './authentication.reducers'

export default combineReducers({
   /* signUp: signupReducer,*/
    signIn: signinReducer
});