import {Dispatch} from 'redux';
import {usersAPI} from '../API/api';
import {updateObjectInArray} from '../utils/objectHelpers';

type PhotosType = {
    small: string | undefined
    large: string | undefined
}
type LocationType = {
    country: string
    city: string
}

export type UserType = {
    photos: PhotosType
    name: string;
    id: number
    followed: boolean
    location: LocationType
    status: string
}


export type initialStateUserType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    followingInProgress: number[]
}
const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: initialStateUserType = initialState, action: ACUsersReducerType): initialStateUserType => {
    switch (action.type) {
        case 'users/FOLLOW-SUCCESS':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        case 'users/UNFOLLOW-SUCCESS':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            }
        case 'users/SET-USER':
            return {...state, users: [...action.users]}
        case 'users/SET-CURRENT-PAGE':
            return {...state, currentPages: action.currentPages}
        case 'users/SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'users/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export type ACUsersReducerType = FollowSuccessACType | UnfollowSuccessACType | SetUserACType
    | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType
    | ToggleIsFollowingProgressACType

type FollowSuccessACType = ReturnType<typeof followSuccessAC>
export const followSuccessAC = (userID: number) => {
    return {type: 'users/FOLLOW-SUCCESS', id: userID} as const
}

type UnfollowSuccessACType = ReturnType<typeof unfollowSuccessAC>
export const unfollowSuccessAC = (userID: number) => {
    return {type: 'users/UNFOLLOW-SUCCESS', id: userID} as const
}

type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users: Array<UserType>) => {
    return {type: 'users/SET-USER', users: users} as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPages: number) => {
    return {type: 'users/SET-CURRENT-PAGE', currentPages} as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: 'users/SET-TOTAL-USERS-COUNT', totalCount} as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'users/TOGGLE-IS-FETCHING', isFetching} as const
}

type ToggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgressAC>
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const
}

export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch<ACUsersReducerType>) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUserAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
}

export const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))

    const resultCode = await apiMethod(userId)
    if (resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgressAC(false, userId))
}

export const followTC = (userId: number) => async (dispatch: Dispatch<ACUsersReducerType>) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccessAC)
}

export const unfollowTC = (userId: number) => async (dispatch: Dispatch<ACUsersReducerType>) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccessAC)

}



