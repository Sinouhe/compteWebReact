import {combineReducers} from 'redux';
import usersReducer from './users';
import { reducer as form } from 'redux-form';

export default combineReducers({
    form,
    users : usersReducer
});