import {combineReducers, createStore} from 'redux';

import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {UsersReducer} from './usersReducer';
import {authReducer} from './authReducer';


const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


//@ts-ignore
window.store = store
