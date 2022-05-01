import { fetchProfile } from "../../Api/user/getProfile";
import { types } from "./types";

export const fetchProfileActionCreator = (data) => ({
    type:types.GET_PROFILE,
    data
})

export const loadProfileThunkCreator = () => async dispatch => {
    try {
        const res = await fetchProfile();
        dispatch(fetchProfileActionCreator(res));
    } catch (error) {
        console.log(error,'error fetching profile info');
    }
}
