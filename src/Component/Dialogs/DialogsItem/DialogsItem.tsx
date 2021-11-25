import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemsType = {
    name: string
    id: number
}

export const DialogItems = (props: DialogItemsType) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
