import camelize from 'camelize';
import Axios from 'axios';

export const callApi = (url, options) => {

    fetch(url, options)
        .then(
            response => (response.success
                    ? response.json()
                    : Promise.reject(response.text())
            ),
            error => Promise.reject(error)
        )
        .then(
            res => ({ json: camelize(json) }),
            error => ({ error })
        )
        .catch(error => ({ error }));
};

export const callsApi = (url, options) => {
    Axios(url, options).then(res => {
       return { json : camelize( res.json()) };
    })
    .catch( error => ({ error }));
};