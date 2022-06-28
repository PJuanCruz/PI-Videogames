import { GET_GENRES } from "../actions";

const initialState = {
    genres: [],
    platforms: []
};

function selects(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_GENRES:
            return {
                ...state,
                genres: payload
            };
        default:
            return {
                ...state
            };
    }
}

export default selects;