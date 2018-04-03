// Set up your root reducer here...
import { combineReducers } from 'redux';
import { signupReducer, signinReducer } from './reducers/Authentication';
import router from './reducers/Router';
import session from './reducers/Session';
import entities from './reducers/Entities';
import header from './app/containers/Header/reducer'

export default combineReducers({
    entities,
    router,
    session,
    header
});
