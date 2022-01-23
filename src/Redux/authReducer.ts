
const initialState = {
    id: null ,
    login: null,
    email: null,
    isAuth: false,
}

export type initialStateProfileType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

export const authReducer = (state: initialStateProfileType = initialState, action: AuthReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'SET-IS-AUTH':{
            return {...state, isAuth:action.isAuth}
        }
        default:
            return state
    }
}
type AuthReducerType =  SetAuthUserDataACType | SetIsAuth

type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string ) => {
    return {type: 'SET-USER-DATA', payload:{id,login,email} } as const
}

type SetIsAuth = ReturnType<typeof setIsAuth>
export const setIsAuth = (isAuth: boolean) => {
    return {type: 'SET-IS-AUTH', isAuth} as const
}
