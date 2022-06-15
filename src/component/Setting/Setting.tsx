import React from 'react';

type SettingPropsType = {
    name: string
}

export const Setting = (props: SettingPropsType) => {
    return (
        <div>{props.name}</div>
    )
}