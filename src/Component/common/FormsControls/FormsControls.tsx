import React from 'react';
import s from './FormsControls.module.css'


const FormControl = ({meta, children,}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props} ><input {...props.input} {...restProps} /></FormControl>
}
