import React from 'react';
import s from './Avatar.module.scss'

type MessagePropsType = {
    avatar: string
}

export const Avatar = ({avatar,}: MessagePropsType) => {
    return <img className={s.avatar} src={avatar}  alt={'avatar'}/>
}
