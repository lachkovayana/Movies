
import { combineReducers } from "redux"
import moviesReducer  from "./movies/reducer";
import profileReducer from "./user/reducer";

export const rootReducer = combineReducers({
  moviesPage: moviesReducer,
  profilePage: profileReducer,
})
