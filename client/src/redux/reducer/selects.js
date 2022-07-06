import { GET_GENRES, GET_PLATFORMS, GET_VIDEOGAMES_DB_NAMES } from "../actions";

const initialState = {
    genres: [],
    platforms: [],
    names: []
};

function selects(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_GENRES:
            return {
                ...state,
                genres: payload
            };
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: payload
            }
        case GET_VIDEOGAMES_DB_NAMES:
            return {
                ...state,
                names: payload
            }
        default:
            return {
                ...state
            };
    }
}

export default selects;