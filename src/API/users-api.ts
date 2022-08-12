import {AxiosResponse} from 'axios';
import {BaseApiType, UserResponseType} from './types';
import {instance} from './instance';

export const usersAPI = {
    getUsers(currentNumberPages: number, pageSize: number) {
        return instance.get<any, AxiosResponse<UserResponseType>>(`users?page=${currentNumberPages}&count=${pageSize}`)
            .then((res) => {
                    return res.data
                } //вернул promise в котором data
            )
    },
    unfollowUser(userId: number) {
        return instance.delete<BaseApiType>(`follow/${userId}`).then((res)=>{
            return res.data
        })
    },
    followUser(userId: number) {
        return instance.post<BaseApiType>(`follow/${userId}`).then((res) => {
            return res.data
        })
    }
}