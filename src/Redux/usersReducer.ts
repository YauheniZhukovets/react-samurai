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
    users:Array<UserType>
}
const initialState: initialStateUserType = {
    users: []
}

export const UsersReducer = (state:initialStateUserType = initialState, action: ACUsersReducerType): initialStateUserType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:true} : m ) }
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:false} : m ) }
        case 'SET-USER':
            return {...state, users: [...action.users]}
        default:
            return state
    }
}
type ACUsersReducerType = followACType | unfollowACType | setUserACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userID:number) => {
    return {type: 'FOLLOW', id:userID} as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID:number) => {
    return {type: 'UNFOLLOW', id:userID} as const
}

type setUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users:Array<UserType>) => {
    return {type : 'SET-USER', users:users} as const
}