import React from 'react';
import {AddMessageAC, StoreType, UpdateNewMessageTextAC} from '../../Redux/store';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState()

    const onSendMessage = () => {
        props.store.dispatch(AddMessageAC(state.dialogsPage.newMessageText))
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(UpdateNewMessageTextAC(text))
    }

    return <Dialogs AddMessage={onSendMessage}
                    UpdateNewMessageText={onMessageChange}
                    dialogsPage={state.dialogsPage}/>
}