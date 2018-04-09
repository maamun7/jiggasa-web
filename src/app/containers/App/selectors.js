import { createSelector } from 'reselect';

export const getEntities = state => state.entities;
// session selectors
export const getOauthToken = state => state.session.oauthToken;
export const getSessionId = state => state.session.id;
export const getSessionUser = createSelector(
    getSessionId,
    getEntities,
    (id, entities) => (id in entities.users ? entities.users[id] : null )
);
export const getIsAuthenticated = createSelector(
    getOauthToken,
    getSessionUser,
    (oauthToken, user) => Boolean(oauthToken && user),
);