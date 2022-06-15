import React from 'react';
import s from '../Dialogs.module.css'

type MessagePropsType = {
    message: string
}

export const Message = ({message,}: MessagePropsType) => {

    return <div className={s.dialog}>{message}</div>
}
