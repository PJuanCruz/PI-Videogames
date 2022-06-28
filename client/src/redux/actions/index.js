import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';

export function getVideogames(name = '') {
    return async function(dispatch) {
        const videogames = (await axios.get(`http://localhost:3001/videogames?name=${name}`)).data;
        dispatch(
            {
                type: GET_VIDEOGAMES,
                payload: videogames
            }
        );
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