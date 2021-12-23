import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItems} from './DialogsItem/DialogsItem';
import {ActionsTypes, AddMessageAC, DialogsPageType, UpdateNewMessageTextAC} from '../../Redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogElement = props.dialogsPage.dialogsData.map((m) => <DialogItems key={m.id} name={m.name} id={m.id}/>)

    const messageElement = props.dialogsPage.massagesData.map((m) => <Message message={m.message}/>)


    const onSendMessage = () => {
        props.dispatch(AddMessageAC(props.dialogsPage.newMessageText))
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(UpdateNewMessageTextAC(text))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    <div>{messageElement}</div>
                    <div>
                        <textarea placeholder={'Enter your message'}
                                  onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}