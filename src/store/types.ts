import {ThunkAction} from 'redux-thunk';
import {ProfileReducerType} from 'store/redusers/profileReducer';
import {DialogsReducerType} from 'store/redusers/dialogsReducer';
import {UsersReducerType} from 'store/redusers/usersReducer';
import {AuthReducerType} from 'store/redusers/authReducer';
import {AppReducerType} from 'store/redusers/appReducer';
import {store} from 'store/store';


export type AppStateType = ReturnType<typeof store.getState>

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

export type AppActionType =
    | ProfileReducerType
    | DialogsReducerType
    | UsersReducerType
    | AuthReducerType
    | AppReducerType
