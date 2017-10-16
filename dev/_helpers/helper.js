import Axios from 'axios';
import * as config from '../_helpers/config';

export const saveAuthInfo = (authInfo) => {
    localStorage.setItem('auth', JSON.stringify(authInfo));
};

export const getAuthInfo = () => {
     return JSON.parse(localStorage.getItem('auth'));
};

export const verifyAuthToken = () => {
     let status = false;
     let auth = getAuthInfo();
     if (auth != null) {
         Axios.get(config.BASE_URL+"/authenticate", { headers: { 'Authorization' : auth.token } })
             .then(response => {
                 status = true;
             })
             .catch(error => {
                 if (error.response.status == 401) {
                    //Set null authInfo if verify token is not valid
                     localStorage.removeItem('auth');
                     status = false;
                 }
             });
     }

     return status;
};
