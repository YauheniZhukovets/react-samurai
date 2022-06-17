import React from 'react';
import s from './DialogsItem.module.scss'
import {NavLink} from 'react-router-dom';

type DialogItemsType = {
    name: string
    id: number
}

export const DialogItems = ({id, name,}: DialogItemsType) => {
    const path = `/dialogs/${id}`
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.link

    return <div className={s.dialog}>
        <NavLink className={setActive} to={path}>{name}</NavLink>
    </div>
}
