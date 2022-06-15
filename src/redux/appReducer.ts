import {getAuthMeTC} from './authReducer';
import {AppThunk} from './reduxStore';

const initialState = {
    initialized: false
}

export type initialStateProfileType = {
    initialized: boolean
}

export const appReducer = (state: initialStateProfileType = initialState, action: AppReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export type AppReducerType = InitializedSuccessACType

type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {type: 'app/INITIALIZED-SUCCESS'} as const
}

export const initializeAppTC = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthMeTC())
    dispatch(initializedSuccessAC())
}








