// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './signinSignup'

export default combineReducers({
    signUp: signupReducer,
    signIn: signinReducer
});