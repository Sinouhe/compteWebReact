import axios from 'axios';
import confApi from '../confApi';

const logInUser = (credentials) => {
    const url = confApi.endPoint + '/signin'; 
    console.log('in API ' + url);
    console.log(credentials);

    axios.post(url,credentials)
        .then(response => {
            console.log('success')
            console.log(response);
        })
        .catch((err) => {
            console.log('error')
            console.log(err);
        });

    return null;
};

export {logInUser};