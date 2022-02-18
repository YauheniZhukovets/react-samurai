import {applyMiddleware, combineReducers, createStore} from 'redux';

import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {UsersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth:authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


//@ts-ignore
window.store = store
