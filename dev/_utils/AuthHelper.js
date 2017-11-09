import Axios from 'axios';
import * as config from './CommonUtils';

export const saveAuthInfo = (authInfo) => {
    localStorage.setItem('auth', JSON.stringify(authInfo));
};

export const getAuthInfo = () => {
     return JSON.parse(localStorage.getItem('auth'));
};

export const getAuthenticatedInfo = (state) => {
     let auth = getAuthInfo();
     if (auth !== null) {
        return auth;
     } else {
         return null;
     }
};

export const getIsAuthenticated = state => {
     let auth = getAuthInfo();
     if (auth != null) {
         return Axios.get(config.BASE_URL+"/authenticate", { headers: { 'Authorization' : auth.token } })
             .then(response => {
                 return true;
             })
             .catch(error => {
                 if (error.response.status == 401) {
                    //Set null authInfo if verify token is not valid
                     localStorage.removeItem('auth');
                     return false;
                 }
             });
     }

     return false;
};

export const doEmptyAuthSession = (state) => {
    if (getAuthInfo() != null) {
        localStorage.removeItem('auth');
    }
    return true;
};