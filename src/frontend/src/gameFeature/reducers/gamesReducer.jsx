import { Types } from '../actions/gamesActions';

const INITIAL_STATE = {
    gamesListPS4: undefined,
    gamesListSwitch: undefined
};


const usersReducer = (state = INITIAL_STATE, action) => {
    let newState = state;
    switch(action.type) {
        case Types.GAMES_SET_LIST_HOME_PAGE :
            newState = {
                ...state,
                gamesListPS4: action.payload.ps4,
                gamesListSwitch: action.payload.switch
            };
            break;
        default :
            newState = state;
            break;
    }    
    return newState;
};

export default usersReducer;