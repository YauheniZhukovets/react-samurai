import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from '../../Redux/store';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

// type DialogsPropsType = {
//     store: StoreType
// }
export const DialogsContainer = () => {

    // const state = props.store.getState()
    //
    // const onSendMessage = () => {
    //     props.store.dispatch(AddMessageAC(state.dialogsPage.newMessageText))
    // }
    // const onMessageChange = (text: string) => {
    //     props.store.dispatch(UpdateNewMessageTextAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const onSendMessage = () => {
                        store.dispatch(AddMessageAC(state.dialogsPage.newMessageText))
                    }
                    const onMessageChange = (text: string) => {
                        store.dispatch(UpdateNewMessageTextAC(text))
                    }

                    return (
                        <Dialogs AddMessage={onSendMessage}
                                 UpdateNewMessageText={onMessageChange}
                                 dialogsPage={state.dialogsPage}/>
                    )
                }
            }

        </StoreContext.Consumer>
    )
}
