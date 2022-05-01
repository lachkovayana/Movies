import { types } from "./types";

const initialState = {
    movies: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}

export default moviesReducer;