export const Types = {
    USER_LOGIN: 'users/user_login',
    USERS_ERROR: 'users/user_error'
};

export const signinUser = (credentials) => {
    return {
        type: Types.USER_LOGIN,
        payload: {
            credentials
        }
    };
};

export const usersError = ({error}) => {
    return {
        type: Types.USERS_ERROR,
        payload: {
            error
        }
    };
};

