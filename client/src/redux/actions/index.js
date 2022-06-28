import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

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