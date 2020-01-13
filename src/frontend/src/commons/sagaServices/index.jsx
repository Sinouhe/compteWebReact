import usersSagas from '../../userFeature/sagasServices/users';
import gamesSagas from '../../gameFeature/sagasServices/gamesSagaServices';
import {all} from 'redux-saga/effects';


export default function* rootSaga() {
    yield all({
        ...usersSagas,
        ...gamesSagas
    });
}