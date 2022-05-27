import {Preloader} from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../Redux/profileReducer';

export type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataType) => {
    if (!profile) {
        return <Preloader/>
    }
    const keysContacts = Object.keys(profile.contacts)
    const valuesContacts = Object.values(profile.contacts)

    return (
        <div>
            <h3>{profile.fullName}</h3>
            <div>
                {isOwner && <button onClick={goToEditMode}>edit</button>}
            </div>
            <div className={s.contact}>
                <b>Contacts</b>:
                {keysContacts.map((key, index) => {
                    return <Contact key={index} contactTitle={key} contactValue={valuesContacts[index]}/>
                })}
            </div>
            <p><b>Ищу работу: </b>{profile.lookingForAJob ? 'yas' : 'no'}</p>
            {profile.lookingForAJob &&
                <div>
                    <p><b>My skills: </b>{profile.lookingForAJobDescription}</p>
                </div>}
            <p><b>Обо мне: </b>{profile.aboutMe}</p>
        </div>
    )
}
export type ContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div>
            {contactValue && <div className={s.contactValue}><b>{contactTitle}</b>: {contactValue}</div>}
        </div>
    )
}