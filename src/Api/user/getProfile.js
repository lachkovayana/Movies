import { instance } from "../API"

export const fetchProfile = async (id) => {
   const res =  await instance.get('account/profile');
   console.log(res);
   return res.data;
}