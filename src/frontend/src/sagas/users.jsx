import {takeLatest, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import { logInUser } from '../api/User/users';

function* loginUser(action) {
    try{
        const result = yield call(logInUser, action.payload.credentials);
        if(result?.data?.status === 'success' && result?.data?.result?.token) {
            localStorage.setItem('tokenBackenAuthent', result.data.result.token);
            yield put(actions.usersError({error: ''}));
        } else if (result?.data?.status === 'success') {
            throw new Error('no token in the response from the back end for this user');
        }
        
    }catch(err){
        yield put(actions.usersError({
            error: `An error occured when trying to log the user, ${err.message}`
        }));
    }
}

function* watchUserLoginRequest(){
    yield takeLatest(actions.Types.USER_LOGIN, loginUser);
}

const usersSagas = [
    fork(watchUserLoginRequest)
];

export default usersSagas;