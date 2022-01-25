import React from 'react';

type LoginPropsType = {
    name: string
}

export const Login = (props:LoginPropsType) => {
    return (
            <h1>{props.name}</h1>
    );
};
