import {combineReducers} from 'redux';
import usersReducer from '../../userFeature/reducers/users';

export default combineReducers({
    users : usersReducer
});