import { instance } from "../API"

export const RegisterUserRequest = async (username, name, passwd, email, date, gender) => {
    const res = await instance.post('account/register', {
        userName: username,
        name: name,
        password: passwd,
        email: email,
        birthDate: date,
        gender: gender
    });
    return res.data;
}