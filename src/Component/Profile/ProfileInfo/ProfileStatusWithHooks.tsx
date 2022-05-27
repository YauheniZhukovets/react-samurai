import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusPropsType = {
    statusText: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const {statusText,updateStatusTC} = props

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(statusText)

    useEffect( ()=>{
        setStatus(status)
    }, [status, statusText])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatusTC(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b><span onDoubleClick={activateEditMode}>{statusText || 'Double click to enter'}</span>
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
