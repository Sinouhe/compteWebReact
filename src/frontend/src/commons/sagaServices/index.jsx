import UsersSagas from '../../userFeature/sagasServices/users';
import {all} from 'redux-saga/effects';


export default function* rootSaga() {
    yield all({
        ...UsersSagas
    });
}