export type UserType = {
    id: number
    followed: boolean
    fullName: string
    location: LocationType
    status: string
    photoUrl:string
}
type LocationType = {
    country: string
    city: string
}


const initialState = {
    users: [
        {id: 1, photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg',
            followed: true, fullName: 'Dmitry', location: {country: 'Belarus', city: 'Minsk'}, status: 'I like football'},
        {id: 2 , photoUrl: 'https://www.xyplanningnetwork.com/wp-content/uploads/2020/12/swetalinkedin_1-300x300.jpg',
            followed: true, fullName: 'Sweta', location: {country: 'Belarus', city: 'Minsk'}, status: 'I so pretty woman'},
        {id: 3,photoUrl: 'https://img.a.transfermarkt.technology/portrait/big/127032-1479730792.jpg',
            followed: false, fullName: 'Sergey', location: {country: 'Ukraine', city: 'Kiev'}, status: 'I like play football'},
        {id: 4,photoUrl: 'https://akn.ug/wp-content/uploads/2020/10/312439-3E1IxJu0.jpg',
            followed: false, fullName: 'Andrew', location: {country: 'U.S.', city: 'Philadelphia'}, status: 'I like meet'},
    ] as Array<UserType>
}

export type initialStateUserType = typeof initialState

export const UsersReducer = (state:initialStateUserType = initialState, action: ACUsersReducerType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:true} : m ) }
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m=>m.id === action.id ? {...m, followed:false} : m ) }
        case 'SET-USER':
            return {...state, users: [...state.users, {...action.users} ]}
        default:
            return state
    }
}
type ACUsersReducerType = followACType | unfollowACType | setUserACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userID:number) => {
    return {
        type: 'FOLLOW',
        id:userID
    } as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID:number) => {
    return {
        type: 'UNFOLLOW',
        id:userID
    } as const
}

type setUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users:UserType) => {
    return {
        type : 'SET-USER',
        users:users
    } as const
}