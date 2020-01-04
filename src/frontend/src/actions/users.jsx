export const Types = {
    USER_LOGIN: 'users/user_login',
    USERS_ERROR: 'users/user_error',
    USERS_ERROR_LOGIN: 'users/user_errorLogin',
    USERS_SET_AUTHENTIFICATION: 'users/user_set_authentification'
};

export const signinUser = (credentials, setErrors) => {
    return {
        type: Types.USER_LOGIN,
        payload: {
            credentials,
            setErrors
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


export function setAuthentification(isLoggedIn) {
    return function(dispatch) {
      dispatch({
        type: Types.USERS_SET_AUTHENTIFICATION,
        payload: isLoggedIn
      });
    };
  }
  
