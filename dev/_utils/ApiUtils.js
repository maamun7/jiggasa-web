import camelize from 'camelize';
import Axios from 'axios';
/*
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
};*/

const getHeader = () => {
    return {
        Authorization : JSON.parse(localStorage.getItem('oauth'))
    };
};

export const callGetApi = (url, paramsObj = null, addHeader = true) => {

    let headerObj = getHeader();
    if (! addHeader) {
        headerObj = null
    }

    return Axios.get(url, { params: paramsObj, headers : headerObj })
    .then(res => {
        const { data } = res;
        return camelize(data);
    })
    .catch(error => {
        return error;
    });
};

export const callPostApi = (url, options, addHeader = true) => {

    let headerObj = getHeader();
    if (! addHeader) {
        headerObj = null
    }

    return Axios.post(url, options, { headers : headerObj })
    .then(res => {
        const { data } = res;
        return camelize(data);
    })
    .catch(error => {
        return error;
    });
};