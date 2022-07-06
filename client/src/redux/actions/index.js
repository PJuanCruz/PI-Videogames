import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const SET_GENRES_FILTER = 'SET_GENRES_FILTER';
export const SET_STATUS_FILTER = 'SET_STATUS_FILTER';
export const SET_ORDER = 'SET_ORDER';
export const FILTER_AND_SORT = 'FILTER_AND_SORT';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_PAGE = 'SET_PAGE';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
export const PUT_VIDEOGAME = 'PUT_VIDEOGAME';
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME';
export const GET_VIDEOGAMES_DB_NAMES = 'GET_VIDEOGAMES_DB_NAMES';
export const SET_DATA = 'SET_DATA';

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

export function getVideogameById(id, setLoading) {
    return async function(dispatch) {
        const videogame = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
        dispatch(
            {
                type: GET_VIDEOGAMES_BY_ID,
                payload: videogame
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

export function getPlatforms() {
    return async function(dispatch) {
        const platforms = (await axios.get(`http://localhost:3001/platforms`)).data;
        dispatch(
            {
                type: GET_PLATFORMS,
                payload: platforms
            }
        );
    };
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

export function setSearch(search) {
    return {
        type: SET_SEARCH,
        payload: search
    }
}

export function filterAndSort(filters) {
    return {
        type: FILTER_AND_SORT,
        payload: filters
    }
}

export function setPage(index) {
    return {
        type: SET_PAGE,
        payload: index
    }
}

export function postVideogame(payload) {
    return async function(dispatch) {
        await axios.post(`http://localhost:3001/videogames`, payload);
        dispatch(
            {
                type: POST_VIDEOGAME
            }
        );
    }
}

export function putVideogame(id, videogame) {
    return async function(dispatch) {
        await axios.put(`http://localhost:3001/videogames/${id}`, videogame);
        dispatch(
            {
                type: PUT_VIDEOGAME
            }
        );
    }
}

export function deleteVideogame(id) {
    return async function(dispatch) {
        await axios.delete(`http://localhost:3001/videogames/${id}`);
        dispatch(
            {
                type: DELETE_VIDEOGAME
            }
        );
    }
}

export function getVideogamesDBNames() {
    return async function (dispatch) {
        const videogames = (await axios.get(`http://localhost:3001/videogames/database`)).data;
        dispatch(
            {
                type: GET_VIDEOGAMES_DB_NAMES,
                payload: videogames
            }
        );
    }
}

export function setData() {
    return {
        type: SET_DATA
    }
}