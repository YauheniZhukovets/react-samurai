import {ActionsTypes, DialogsPageType, MessageType} from './state';

const DialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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