import React from 'react';
import s from './Avatar.module.scss'

type MessagePropsType = {
    avatar: string
}

export const Avatar: React.FC<MessagePropsType> = ({avatar} ) => {
    return <img className={s.avatar} src={avatar}  alt={'avatar'}/>
}
