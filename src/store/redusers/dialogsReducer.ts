import {v1} from 'uuid'
import avatar from 'assets/images/userIcon.png'
import {InferActionsType} from 'store/types';


const initialState = {
    dialogsData: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Veronika'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Igor'},
    ],
    massagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'I\'m ok!'},
        {id: 5, message: 'It is good!'},
    ],
    avatarData: [
        {id: 1, link: avatar},
        {id: 2, link: avatar},
        {id: 3, link: avatar},
        {id: 4, link: avatar},
        {id: 5, link: avatar},
    ]
}

export type InitialStateDialogsType = typeof initialState

export const dialogsReducer = (state = initialState, action: DialogsReducerType): InitialStateDialogsType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const body = action.newMessageBody
            return {...state, massagesData: [...state.massagesData, {id: +v1(), message: body}]}
        }
        default:
            return state
    }
}
export type DialogsReducerType = InferActionsType<typeof actions>

export const actions = {
    addMessage: (newMessageBody: string) => ({type: 'dialogs/ADD-MESSAGE', newMessageBody} as const)
}




