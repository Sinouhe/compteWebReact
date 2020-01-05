export const Types = {
    USER_LOGIN: 'users/user_login',
    USER_LOGOUT: 'user/user_logout',
    USERS_SET_AUTHENTIFICATION: 'users/user_set_authentification',
    USER_REGISTER: 'users/user_register'

};

export const signinOut = () => {
    return {
        type: Types.USER_LOGOUT
    };
};

export const registerUser = (values, setErrors, history) => {
    return {
        type: Types.USER_REGISTER,
        payload: {
            values,
            setErrors
        },
        meta: {
            callbackSuccessAction: () => {history.push('/')}
        }
    }
}

export const signinUser = (credentials, setErrors, history) => {
    return {
        type: Types.USER_LOGIN,
        payload: {
            credentials,
            setErrors
        },
        meta: {
            callbackSuccessAction: () => {history.push('/')}
        }
    };
};

export const setAuthentification = (isLoggedIn) => {
    return {
        type: Types.USERS_SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
};
  
