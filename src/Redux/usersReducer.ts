import {Dispatch} from 'redux';
import {usersAPI} from '../API/api';

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
    pageSize: 100,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: true,
    followingInProgress: []
}

export const UsersReducer = (state: initialStateUserType = initialState, action: ACUsersReducerType): initialStateUserType => {
    switch (action.type) {
        case 'FOLLOW-SUCCESS':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW-SUCCESS':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET-USER':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPages: action.currentPages}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
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
    return {type: 'FOLLOW-SUCCESS', id: userID} as const
}

type UnfollowSuccessACType = ReturnType<typeof unfollowSuccessAC>
export const unfollowSuccessAC = (userID: number) => {
    return {type: 'UNFOLLOW-SUCCESS', id: userID} as const
}

type SetUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users: Array<UserType>) => {
    return {type: 'SET-USER', users: users} as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPages: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPages} as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount} as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}

type ToggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgressAC>
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const
}

export const requestUsersTC = (page: number, pageSize: number) => {
    return (dispatch: Dispatch<ACUsersReducerType>) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page))

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUserAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}

export const getUsersPageChangedTC = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch<ACUsersReducerType>) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUserAC(data.items))
        })
    }
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch<ACUsersReducerType>) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.followUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(followSuccessAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })
    }
}

export const unfollowTC = (userId: number) => {
    return (dispatch: Dispatch<ACUsersReducerType>) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.unfollowUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowSuccessAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })
    }
}



