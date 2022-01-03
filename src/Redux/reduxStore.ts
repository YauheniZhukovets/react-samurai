import {combineReducers, createStore} from 'redux';

import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';


const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


//@ts-ignore
window.store=store
