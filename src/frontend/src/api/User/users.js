import axios from 'axios';
import confApi from '../confApi';

const logInUser = (credentials) => {
    const url = confApi.endPoint + '/signin'; 
    console.log('in API ' + url);
    console.log(credentials);

    axios.post(
            url,
            {
                email: 'salut',
                password: '1234'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
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