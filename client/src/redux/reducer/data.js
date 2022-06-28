import { filterVideogames, sortVideogames } from '../../utils/filter';
import { FILTER_AND_SORT, GET_VIDEOGAMES } from '../actions';

const initialState = {
    videogames: [],
    showVideogames: [],
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
        default:
            return {
                ...state
            };
    }
}

export default data;