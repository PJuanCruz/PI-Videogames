import { filterVideogames, sortVideogames } from '../../utils/filter';
import { FILTER_AND_SORT, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, POST_VIDEOGAME, PUT_VIDEOGAME, SET_PAGE } from '../actions';

const initialState = {
    videogames: [],
    showVideogames: [],
    videogameDetail: {},
    page: 1
};

function data(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: payload,
                showVideogames: payload
            }
        case FILTER_AND_SORT:
            const videogames = filterVideogames([...state.videogames], payload.genres, payload.status)
            sortVideogames(videogames, payload.order)
            return {
                ...state,
                showVideogames: videogames
            }
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        case POST_VIDEOGAME:
            return {
                ...state
            }
        case GET_VIDEOGAMES_BY_ID:
            return {
                ...state,
                videogameDetail: payload
            }
        case PUT_VIDEOGAME:
            return {
                ...state
            }
        default:
            return {
                ...state
            };
    }
}

export default data;