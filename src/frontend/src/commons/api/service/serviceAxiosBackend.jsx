import axios from 'axios';

const serviceAxiosBackend = (token = undefined) => {
    let defaultOptions = {};
    if (token) {
        defaultOptions = {
            headers: {
                Authorization: token ? `Token ${token}` : '',
            },
        };
    }     

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};

export {serviceAxiosBackend};