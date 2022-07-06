import { SET_GENRES_FILTER, SET_ORDER, SET_SEARCH, SET_STATUS_FILTER } from "../actions";

const initialState = {
    genres: 'All',
    status: 'All',
    order: 'None',
    search: ''
};

function filters(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_GENRES_FILTER:
            return {
                ...state,
                genres: payload
            }
        case SET_STATUS_FILTER:
            return {
                ...state,
                status: payload
            }
        case SET_ORDER:
            return {
                ...state,
                order: payload
            }
        case SET_SEARCH:
            return {
                ...state,
                genres: 'All',
                status: 'All',
                order: 'None',
                search: payload
            }
        default:
            return {
                ...state
            };
    }
}

export default filters;