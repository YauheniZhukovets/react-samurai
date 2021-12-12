import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItems} from './DialogsItem/DialogsItem';
import {DialogsPageType} from '../../Redux/state';

export const Dialogs = (props: DialogsPageType) => {

    /* const dialogsData = [
         {id: 1, name: 'Egor'},
         {id: 2, name: 'Marina'},
         {id: 3, name: 'Veronika'},
         {id: 4, name: 'Andrey'},
         {id: 5, name: 'Igor'},
         {id: 6, name: 'Artem'},
     ]

     const massagesData = [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How is your it-kamasutra'},
         {id: 3, message: 'Yo'},
         {id: 4, message: 'Yo'},
         {id: 5, message: 'Yo'},
     ]*/

    const dialogElement = props.dialogsData.map((n) => <DialogItems name={n.name} id={n.id}/>)
    const messageElement = props.massagesData.map((m) => <Message message={m.message}/>)

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