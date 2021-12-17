import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItems} from './DialogsItem/DialogsItem';
import {DialogsPageType} from '../../Redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogElement = props.dialogsPage.dialogsData.map((m) => <DialogItems key={m.id} name={m.name} id={m.id}/>)

    const messageElement = props.dialogsPage.massagesData.map((m) => <Message message={m.message}/>)

    const newMessage = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        const text = newMessage.current?.value
        alert(text)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                    <div>
                        <textarea ref={newMessage}> </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}