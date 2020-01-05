import confApi from '../confApi';
import { serviceAxiosBackend } from '../service/serviceAxiosBackend';

const logInUser = (credentials) => {
    const url = confApi.endPoint + confApi.logUser; 
    return serviceAxiosBackend().post(url,credentials);
};

const registerUserApi = (values) => {
    const url = confApi.endPoint + confApi.registerUser; 
    return serviceAxiosBackend().post(url,values);
};

export {logInUser, registerUserApi};