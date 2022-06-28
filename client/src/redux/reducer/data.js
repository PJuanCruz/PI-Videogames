import { GET_VIDEOGAMES } from '../actions';

const initialState = {
    videogames: []
};

function data(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: payload
            }
        default:
            return {
                ...state
            };
    }
}

export default data;