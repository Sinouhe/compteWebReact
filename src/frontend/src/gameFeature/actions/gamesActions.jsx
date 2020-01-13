export const Types = {
    GAMES_GET_LIST_HOME_PAGE: 'games/get_list_home_page',
    GAMES_SET_LIST_HOME_PAGE: 'games/set_list_home_page'

};

export const getListGames = () => {
    return {
        type: Types.GAMES_GET_LIST_HOME_PAGE
    };
};

export const setListGames = (list) => {
    return {
        type: Types.GAMES_SET_LIST_HOME_PAGE,
        payload: list
    };
};
