import {combineReducers} from 'redux';
import usersReducer from '../../userFeature/reducers/users';
import gamesReducer from '../../gameFeature/reducers/gamesReducer'

export default combineReducers({
    users : usersReducer,
    games : gamesReducer
});