import { createSelector } from 'reselect';

// session selectors
export const getOauthToken = state => state.session.oauthToken;
export const getSessionId = state => state.session.id;
export const getSessionUser = createSelector(
    getSessionId,
    (id) => id
);
export const getIsAuthenticated = createSelector(
    getOauthToken,
    getSessionUser,
    (oauthToken, user) => Boolean(oauthToken && user),
);