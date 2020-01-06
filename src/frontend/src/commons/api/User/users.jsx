import confApi from '../confApi';
import { serviceAxiosBackend } from '../service/serviceAxiosBackend';

const logInUserApi = (credentials) => {
    const url = confApi.endPoint + confApi.logUser; 
    return serviceAxiosBackend().post(url,credentials);
};

const registerUserApi = (values) => {
    const url = confApi.endPoint + confApi.registerUser; 
    return serviceAxiosBackend().post(url,values);
};

export {logInUserApi, registerUserApi};