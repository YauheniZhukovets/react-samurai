import {Preloader} from '../../common/Preloader/Preloader';
import s from './ProfileData.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import SuperButton from '../../../common/c2-SuperButton/SuperButton';

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
        <div className={s.profileDataContainer}>
            <h3>{profile.fullName}</h3>
            <div>
                {isOwner && <SuperButton onClick={goToEditMode}>Edit profile</SuperButton>}
            </div>
            <div className={s.contact}>
                <b>Contacts</b>:
                {keysContacts.map((key, index) => {
                    return <Contact key={index} contactTitle={key} contactValue={valuesContacts[index]}/>
                })}
            </div>

            <p><b>looking for a job</b>: {profile.lookingForAJob ? <span>yes</span> : <span>no</span>}</p>
            {profile.lookingForAJob &&
                <div>
                    <p><b>My skills</b>: {profile.lookingForAJobDescription}</p>
                </div>}
            <p><b>About me</b>: {profile.aboutMe}</p>
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
            {contactValue && <div><b>{contactTitle}</b>: {contactValue}</div>}
        </div>
    )
}