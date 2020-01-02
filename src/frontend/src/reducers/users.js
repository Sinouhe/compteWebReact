import { Types } from '../actions/users';

const INITIAL_STATE = {
    items: [],
    error: ''
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
            }
            break;
        default :
            newState = state;
            break;
    }    
    return newState;
}

export default usersReducer;