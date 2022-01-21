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
    currentPages:number
    isFetching:boolean
}
const initialState = {
    users: [],
    pageSize:100,
    totalUsersCount: 0,
    currentPages:1,
    isFetching:true
}

export const UsersReducer = (state:initialStateUserType = initialState, action: ACUsersReducerType): initialStateUserType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:true} : m ) }
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:false} : m ) }
        case 'SET-USER':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPages: action.currentPages}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
type ACUsersReducerType = FollowACType | UnfollowACType | SetUserACType
    | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType

type FollowACType = ReturnType<typeof follow>
export const follow = (userID:number) => {
    return {type: 'FOLLOW', id:userID} as const
}
type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID:number) => {
    return {type: 'UNFOLLOW', id:userID} as const
}
type SetUserACType = ReturnType<typeof setUser>
export const setUser = (users:Array<UserType>) => {
    return {type : 'SET-USER', users:users} as const
}
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPages:number) => {
    return {type: 'SET-CURRENT-PAGE', currentPages } as const
}
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount:number) =>{
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount } as const
}
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching:boolean) =>{
    return {type: 'TOGGLE-IS-FETCHING', isFetching } as const
}
