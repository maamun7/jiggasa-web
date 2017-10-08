// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer } from './signinSignup'

export default combineReducers({
    signUp: signupReducer
});