const initialState = {

};

function state(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        default:
            return {
                ...state
            };
    }
}

export default state;