import { GET_VIDEOGAMES } from '../actions';

const initialState = {
    videogames: []
};

function state(state = initialState, action) {
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

export default state;