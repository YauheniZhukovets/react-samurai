import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profileReducer';
import userPhoto from '../../../assets/images/userIcon.png';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {ProfileData} from './ProfileData';

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatusTC: (status: string) => any
    savePhotoTC: (file: File) => any
    saveProfileTC: (formData: ProfileType) => any
    isOwner: boolean
}

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatusTC,
                                isOwner,
                                savePhotoTC,
                                saveProfileTC
                            }: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)

    const onChangePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhotoTC(e.target.files[0]);
        }
    }

    const onSubmit = (profile: ProfileType) => {
        saveProfileTC(profile)
            .then(() => {
                setEditMode(false)
            })
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileBlock}>
            <div className={s.avatarBlock}>
                <div className={s.userAvatar} style={{backgroundImage: `url(${profile.photos.large || userPhoto})`}}/>
                {isOwner && <div className={s.buttonFileContainer}>
                    <input type="file"
                           name="file"
                           id="file"
                           className={s.inputFile}
                           onChange={onChangePhotoSelected}
                    />
                    <label htmlFor="file">Change avatar</label>
                </div>}

            </div>
            <div className={s.editModeContainer}>
                <ProfileStatusWithHooks statusText={status}
                                        updateStatusTC={updateStatusTC}
                />
                {
                    editMode
                        ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }
            </div>

        </div>
    )
}

