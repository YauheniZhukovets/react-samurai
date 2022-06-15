import React from 'react';

type NewsPropsType = {
    name: string
}

export const News = (props: NewsPropsType) => {
    return (
        <div>{props.name}</div>
    )
}