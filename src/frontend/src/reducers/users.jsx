import { Types } from '../actions/users';

const INITIAL_STATE = {
    items: [],
    isLoggedIn: false,
    error: '',
    errorsLogin: ''
};


const usersReducer = (state = INITIAL_STATE, action) => {
    let newState = state;
    switch(action.type) {
        case Types.GET_USERS_SUCCESS :
            newState = {
                ...state,
                items: action.payload.items
            };
            break;
        case Types.USERS_ERROR: 
            newState = {
                ...state,
                error: action.payload.error
            };
            break;
        case Types.USERS_SET_AUTHENTIFICATION:
            newState = {
                ...state,
                isLoggedIn: action.payload
            };
            break;
        default :
            newState = state;
            break;
    }    
    return newState;
};

export default usersReducer;