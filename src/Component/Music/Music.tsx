import React from 'react';

type MusicPropsType = {
    name: string
}

export const Music = (props: MusicPropsType) => {
    return (
        <div>{props.name}</div>
    )
}