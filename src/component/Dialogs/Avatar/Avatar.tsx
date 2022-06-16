import React from 'react';
import s from '../Dialogs.module.css'

type MessagePropsType = {
    avatar: string
}

export const Avatar = ({avatar,}: MessagePropsType) => {
    return <img className={s.avatar} src={avatar}  alt={'avatar'}/>
}
