import axios from 'axios';

export type User = {
    username: string,
    name: string,
    email: string,
    phoneNumber: number | string,
    dateOfBirth: Date | any
}

const apiUrl = 'http://localhost:3001/';

export const createOrGetEntry = (username: string) => axios.post(apiUrl + 'create-or-get-entry', { username });
export const updateEntry = (user: User) => axios.post(apiUrl + 'update-entry', { user });