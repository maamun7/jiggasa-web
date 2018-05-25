// Set up your root reducer here...
import { combineReducers } from 'redux';
import entities from './app/containers/App/entitiesReducer';
import session from './app/containers/App/sessionReducer';
import header from './app/containers/Header/reducer';
import home from './app/containers/Home/reducer';

export default combineReducers({
    entities,
    session,
    header,
    home
});
