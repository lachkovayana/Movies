import { types } from "./types";

const initialState = {
    profile: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PROFILE:
            return {
                ...state,
                profile: action.data
            }
        default:
            return state;
    }
}

export default profileReducer;