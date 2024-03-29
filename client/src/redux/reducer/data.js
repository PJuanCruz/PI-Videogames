import { filterVideogames, sortVideogames } from '../../utils/filter';
import { DELETE_VIDEOGAME, FILTER_AND_SORT, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, POST_VIDEOGAME, PUT_VIDEOGAME, setSearch, SET_DATA, SET_PAGE } from '../actions';

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
            if (!payload.length) {
                // alert('No se econtraron videojuegos con ese título.');
                return {
                    ...state,
                    showVideogames: []
                }
            } else {
                return {
                    ...state,
                    videogames: payload,
                    showVideogames: payload,
                    page: 1
                }
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
                ...state,
                videogames: [],
                showVideogames: [],
                videogameDetail: {}
            }
        case GET_VIDEOGAMES_BY_ID:
            return {
                ...state,
                videogameDetail: payload
            }
        case PUT_VIDEOGAME:
            return {
                ...state,
                videogames: [],
                showVideogames: [],
                videogameDetail: {}
            }
        case DELETE_VIDEOGAME:
            return {
                ...state,
                videogames: [],
                showVideogames: [],
                videogameDetail: {}
            }
        case SET_DATA:
            return {
                ...state,
                videogames: [],
                showVideogames: [],
                videogameDetail: {},
                page: 1
            }
        default:
            return {
                ...state,
            };
    }
}

export default data;