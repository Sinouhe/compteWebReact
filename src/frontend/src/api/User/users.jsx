import confApi from '../confApi';
import { serviceAxiosBackend } from '../service/serviceAxiosBackend';

const logInUser = (credentials) => {
    const url = confApi.endPoint + confApi.logUser; 
    return serviceAxiosBackend().post(url,credentials);
};

export {logInUser};