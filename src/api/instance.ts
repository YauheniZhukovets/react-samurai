import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '066ae431-6115-49fc-b06c-595e5096a36d'
    },
})
