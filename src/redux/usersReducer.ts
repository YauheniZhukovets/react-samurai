import {updateObjectInArray} from '../utils/objectHelpers';
import {AppThunkType, InferActionsType} from './store';
import {Dispatch} from 'redux';
import {UserType} from '../API/types';
import {usersAPI} from '../API/users-api';

const initialState = {
    users: [] as UserType[],
    pageSize: 20,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

export type InitialStateUserType = typeof initialState

export const usersReducer = (state = initialState, action: UsersReducerType): InitialStateUserType => {
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
export type UsersReducerType = InferActionsType<typeof actions>

const actions = {
    followSuccess: (userID: number) => ({type: 'users/FOLLOW-SUCCESS', id: userID} as const),
    unfollowSuccess: (userID: number) => ({type: 'users/UNFOLLOW-SUCCESS', id: userID} as const),
    setUser: (users: Array<UserType>) => ({type: 'users/SET-USER', users: users} as const),
    setCurrentPage: (currentPages: number) => ({type: 'users/SET-CURRENT-PAGE', currentPages} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'users/SET-TOTAL-USERS-COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE-IS-FETCHING', isFetching} as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const),
}


export const requestUsersTC = (page: number, pageSize: number): AppThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUser(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
}

export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))

    const resultCode = await apiMethod(userId)
    if (resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const followTC = (userId: number): AppThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.followSuccess)
}

export const unfollowTC = (userId: number): AppThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), actions.unfollowSuccess)
}



