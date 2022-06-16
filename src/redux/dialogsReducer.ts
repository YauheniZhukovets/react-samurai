import avatar from '../assets/images/userIcon.png'

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
        {id: 5, message: 'It is good!'}
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

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ACDialogsReducerType): InitialStateDialogsType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const body = action.newMessageBody
            return {...state, massagesData: [...state.massagesData, {id: 6, message: body}]}
        }
        default:
            return state
    }
}
export type ACDialogsReducerType = AddMessageACType

type AddMessageACType = ReturnType<typeof AddMessageAC>
export const AddMessageAC = (newMessageBody: string) => {
    return {type: 'dialogs/ADD-MESSAGE', newMessageBody} as const
}
