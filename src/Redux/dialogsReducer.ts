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
}

export type InitialStateDialogsType = typeof initialState

export const DialogsReducer = (state: InitialStateDialogsType = initialState, action: ACDialogsReducerType):InitialStateDialogsType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const body = action.newMessageBody
            return {...state, massagesData: [...state.massagesData, {id:6, message:body}] }
         }
        default:
            return state
    }
}
export type ACDialogsReducerType = AddMessageACType

type AddMessageACType = ReturnType<typeof AddMessageAC>
export const AddMessageAC = (newMessageBody: string) => {
    return {type: 'ADD-MESSAGE', newMessageBody} as const
}
