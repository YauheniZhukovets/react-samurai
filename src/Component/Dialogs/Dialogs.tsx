import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {
    name: string
}

type DialogItemsType = {
    name: string
    id: number
}

const DialogItems = (props: DialogItemsType) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}

const Message = (props:MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={'Egor'} id={1}/>
                <DialogItems name={'Marina'} id={2}/>
                <DialogItems name={'Veronika'} id={3}/>
                <DialogItems name={'Andrey'} id={4}/>
                <DialogItems name={'Igor'} id={5}/>
                <DialogItems name={'Artem'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}