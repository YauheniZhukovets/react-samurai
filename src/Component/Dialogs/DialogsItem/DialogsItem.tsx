import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemsType = {
    name: string
    id: number
}

export const DialogItems = ({id, name,}: DialogItemsType) => {
    let path = '/dialogs/' + id

    return <div className={s.dialog}>
        <NavLink to={path}>{name}</NavLink>
    </div>
}
