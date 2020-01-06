import {takeLatest, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import { logInUserApi, registerUserApi } from '../../commons/api/User/users';

function* watchUserLoginRequest(){
    yield takeLatest(actions.Types.USER_LOGIN, loginUserSaga);
}

function* loginUserSaga(action) {
    try{
        const { payload: { credentials }, meta: { callbackSuccessAction } } = action;
        const result = yield call(logInUserApi, credentials);

        if(result?.data?.status === 'success' && result?.data?.result?.token) {
            localStorage.setItem('tokenBackenAuthent', result.data.result.token);
            yield put(actions.setAuthentificationAction(true));
            yield call(callbackSuccessAction);
            
        } else if (result?.data?.status === 'success') {
            throw new Error('no token in the response from the back end for this user');
        } else {
            throw new Error(result.data.message);
        }
        
    }catch(err){
        err?.response?.status === 401 ?
            action.payload.setErrors({errorsLogin: 'bad credentials'}) :
            action.payload.setErrors({errorsLogin: `An error occured when trying to log the user, ${err.message}`});
    }
}

function* watchUserLogoutRequest(){
    yield takeLatest(actions.Types.USER_LOGOUT, logoutUser);
}

function* logoutUser() {
    try{
        localStorage.removeItem('tokenBackenAuthent');
        yield put(actions.setAuthentificationAction(false));
        
    }catch(err){
        console.log(`An error occured when trying to log the user, ${err.message}`);
    }
}

function* watchUserRegisterRequest(){
    yield takeLatest(actions.Types.USER_REGISTER, registerUserSaga);
}

function* registerUserSaga(action) {
    try {
        const { payload: { values }, meta: { callbackSuccessAction } } = action;
        const result = yield call(registerUserApi, values);
        if(result?.data?.status === 'success') {
            yield call(callbackSuccessAction);   
        } else {
            action.payload.setErrors({errorsRegister: result.data.message});
        }
        
    }catch(err){
        action.payload.setErrors({errorsRegister: `An error occured when trying to log the user, ${err.message}`});
    }
}

const usersSagas = [
    fork(watchUserLoginRequest),
    fork(watchUserLogoutRequest),
    fork(watchUserRegisterRequest)
];

export default usersSagas;