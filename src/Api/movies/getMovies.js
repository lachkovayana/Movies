import { instance } from "../API"

export const fetchMovies = async (id) => {
   // const url = `api/movies/${id}`
   const res =  await instance.get('movies/1');
   return res.data;
}