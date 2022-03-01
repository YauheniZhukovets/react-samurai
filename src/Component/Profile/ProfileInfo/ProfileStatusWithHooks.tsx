import React, {ChangeEvent, useEffect, useState} from 'react';


export type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}


export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( ()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                        <span onDoubleClick={activateEditMode}>
                            {props.status || 'Введите статус'}
                        </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        autoFocus
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}/>
                </div>
            }
        </div>
    )
}
