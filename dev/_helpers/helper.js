import Axios from 'axios';
import * as config from '../_helpers/config';

export const saveAuthInfo = (authInfo) => {
    localStorage.setItem('auth', JSON.stringify(authInfo));
};

export const getAuthInfo = () => {
     return JSON.parse(localStorage.getItem('auth'));
};

export const verifyAuthToken = () => {
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

export const doEmptyAuthSession = () => {
    if (getAuthInfo() != null) {
        localStorage.removeItem('auth');
    }
    return true;
};