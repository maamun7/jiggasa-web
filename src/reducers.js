// Set up your root reducer here...
import { combineReducers } from 'redux';
import session from './app/containers/App/sessionReducer';
import header from './app/containers/Header/reducer';

export default combineReducers({
    session,
    header
});
