import React from 'react';
import s from './Message.module.scss'

type MessagePropsType = {
    message: string
}

export const Message = ({message,}: MessagePropsType) => {

    return <div>
        <span className={s.textMessage}>{message}</span>
    </div>
}
