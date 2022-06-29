import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';
export const SET_GENRES_FILTER = 'SET_GENRES_FILTER';
export const SET_STATUS_FILTER = 'SET_STATUS_FILTER';
export const SET_ORDER = 'SET_ORDER';
export const FILTER_AND_SORT = 'FILTER_AND_SORT';
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';

export function getVideogames(setLoading, name = '') {
    return async function(dispatch) {
        const videogames = (await axios.get(`http://localhost:3001/videogames?name=${name}`)).data;
        dispatch(
            {
                type: GET_VIDEOGAMES,
                payload: videogames
            }
        );
        setLoading && setLoading(false)
    }
}

export function getGenres() {
    return async function(dispatch) {
        const genres = (await axios.get(`http://localhost:3001/genres`)).data;
        dispatch(
            {
                type:GET_GENRES,
                payload: genres
            }
        );
    }
}

export function setGenresFilter(genresFilter) {
    return {
        type: SET_GENRES_FILTER,
        payload: genresFilter
    }
}

export function setStatusFilter(statusFilter) {
    return {
        type: SET_STATUS_FILTER,
        payload: statusFilter
    }
}

export function setOrder(order) {
    return {
        type: SET_ORDER,
        payload: order
    }
}

// export function setSearchFilter(search) {
//     return {
//         type: SET_SEARCH_FILTER,
//         payload: search
//     }
// }

export function filterAndSort(filters) {
    return {
        type: FILTER_AND_SORT,
        payload: filters
    }
}