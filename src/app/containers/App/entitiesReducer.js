import merge from 'lodash.merge';
import * as consts from './constants';

const initialState = {
  users: {},
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  switch (action.type) {
    case consts.SIGNOUT:
      return {
        ...state,
        users: {},
      };

    default:
      return state;
  }
}
