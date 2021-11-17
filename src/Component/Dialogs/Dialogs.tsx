import React from 'react';

type DialogsPropsType = {
    name: string
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div>{props.name}</div>
    )
}