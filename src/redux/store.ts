import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension';
import {ProfileReducerType, profileReducer} from './profileReducer';
import {DialogsReducerType, dialogsReducer} from './dialogsReducer';
import {UsersReducerType, usersReducer} from './usersReducer';
import {authReducer, AuthReducerType} from './authReducer';
import {appReducer, AppReducerType} from './appReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // для redux dev tools
//export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType =
    | ProfileReducerType
    | DialogsReducerType
    | UsersReducerType
    | AuthReducerType
    | AppReducerType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store
