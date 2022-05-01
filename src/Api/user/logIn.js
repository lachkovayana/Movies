import { instance } from "../API"

export const LogIn = async (username, passwd) => {
    const res = await instance.post('account/login', {
        userName: username,
        password: passwd
    });
    return res.data;
}