import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import { logInUser } from '../api/User/users';

function* loginUser(action) {
    try{
        yield call(logInUser, action.payload.credentials);
        
    }catch(e){
        console.log(e);
        yield put(actions.usersError({
            error: 'An error occured when trying to log the user'
        }));
    }
}

function* watchUserLoginRequest(){
    yield takeLatest(actions.Types.USER_LOGIN, loginUser);
}



const usersSagas = [
    fork(watchUserLoginRequest)
]

export default usersSagas;