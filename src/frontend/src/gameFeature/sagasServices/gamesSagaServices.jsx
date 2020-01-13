import {takeLatest, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/gamesActions';
import { listGamesOrderedByReleaseDate } from '../../commons/api/games/games';
import gamesApiConfig from '../../commons/api/confApi';

function* watchGamesHomeListRequest(){
    yield takeLatest(actions.Types.GAMES_GET_LIST_HOME_PAGE, gamesListSaga);
}

function* gamesListSaga() {
    try{
        const resultPS4 = yield call(  listGamesOrderedByReleaseDate, 
            gamesApiConfig.gamesResultPerHomePage, 
            gamesApiConfig.gamesPlatformIdPS4);
        
        //console.log(resultPS4);
        
        const resultSwitch = yield call(  listGamesOrderedByReleaseDate, 
            gamesApiConfig.gamesResultPerHomePage, 
            gamesApiConfig.gamesPlatformIdSwitch);
        console.log('salut');
        yield put(actions.setListGames({ps4: resultPS4, switch: resultSwitch}));
        
    }catch(err){
        console.log(err);
    }
}

const gamesSagas = [
    fork(watchGamesHomeListRequest)
];

export default gamesSagas;