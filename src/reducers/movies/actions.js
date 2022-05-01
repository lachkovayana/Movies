import { fetchMovies } from "../../Api/movies/getMovies";
import { types } from "./types";

export const fetchMoviesActionCreator = (data) => ({
    type:types.GET_MOVIES,
    data
})

export const loadMoviesThunkCreator = () => async dispatch => {
    try {
        const res = await fetchMovies();
        dispatch(fetchMoviesActionCreator(res));
    } catch (error) {
        console.log(error,'error fetching movies');
    }
}
