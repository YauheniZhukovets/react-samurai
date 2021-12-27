import {ActionsTypes, DialogsPageType, MessageType} from './store';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Veronika'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Artem'},
    ],
    massagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageText: ''
}

const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 6,
                message: action.messageText,
            }
            state.massagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newTextMessage
            return state
        default:
            return state
    }
}
export default DialogsReducer;