import confApi from '../confApi';
import { serviceAxiosBackend } from '../service/serviceAxiosBackend';

const listGamesOrderedByReleaseDate = (numberPerPage, platfromId) => {
    const url = `${confApi.endPointGames}?page_size=${numberPerPage}&platforms=${platfromId}&ordering=released` ; 
    return serviceAxiosBackend().get(url);
};

export {listGamesOrderedByReleaseDate};