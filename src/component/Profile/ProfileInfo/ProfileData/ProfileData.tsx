import {Preloader} from '../../../Common/Preloader/Preloader';
import s from './ProfileData.module.scss';
import React from 'react';
import SuperButton from '../../../Common/SuperButton/SuperButton';
import {ProfileType} from '../../../../types/types';

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
            <h2>{profile.fullName}</h2>
            <div>
                {isOwner &&
                    <SuperButton onClick={goToEditMode}>
                        Edit profile
                    </SuperButton>}
            </div>
            <div className={s.contact}>
                <b>Contacts</b>:
                {
                    keysContacts.map((key, index) => {
                        return <Contact key={index}
                                        contactTitle={key}
                                        contactValue={valuesContacts[index]}
                        />
                    })
                }
            </div>

            <p><b>looking for a job</b>: {profile.lookingForAJob ? <span>YES</span> : <span>NO</span>}</p>
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
            {
                contactValue &&
                <div>
                    <b>{contactTitle}</b>: {contactValue}
                </div>
            }
        </div>
    )
}