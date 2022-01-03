export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Veronika'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Artem'},
    ] as Array<DialogsType>,
    massagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateDialogsType = typeof initialState

export const DialogsReducer = (state: InitialStateDialogsType = initialState, action: ACDialogsReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            const copyState = {...state}
            copyState.newMessageText = action.newTextMessage
            return copyState
        }
        case 'ADD-MESSAGE': {
            const newMessage = {
                id: 6,
                message: state.newMessageText
            }
            const copyState = {...state}
            copyState.massagesData = [...copyState.massagesData]
            copyState.massagesData.push(newMessage)
            copyState.newMessageText = ''
            return copyState
        }
        default:
            return state
    }
}
type ACDialogsReducerType = AddMessageACType | UpdateNewMessageTextACType

type UpdateNewMessageTextACType = ReturnType<typeof UpdateNewMessageTextAC>
export const UpdateNewMessageTextAC = (newTextMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newTextMessage: newTextMessage} as const
}

type AddMessageACType = ReturnType<typeof AddMessageAC>
export const AddMessageAC = () => {
    return {type: 'ADD-MESSAGE'} as const
}
