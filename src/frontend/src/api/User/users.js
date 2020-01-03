import confApi from '../confApi';
import { serviceAxiosBackend } from '../config/serviceAxiosBackend';

const logInUser = (credentials) => {
    const url = confApi.endPoint + confApi.logUser; 
    return serviceAxiosBackend().post(url,credentials);
};

export {logInUser};