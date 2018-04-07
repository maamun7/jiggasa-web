import { createSelector } from 'reselect';

// session selectors
export const getOauthToken = state => state.header.oauthToken;
export const getSessionId = state => state.header.id;
export const getSessionUser = createSelector(
    getSessionId,
    (id) => id
);
export const getIsAuthenticated = createSelector(
    getOauthToken,
    getSessionUser,
    (oauthToken, user) => Boolean(oauthToken && user),
);