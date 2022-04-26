import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../Redux/profileReducer';
import userPhoto from '../../../assets/images/userIcon.png';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatusTC,}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    const noData = 'не указан'
    return (
        <div className={s.profileBlock}>

            <div className={s.descriptionBlock}>
                <img className={s.userPhoto} src={profile.photos.small ? profile.photos.small : userPhoto}
                     alt={'img'}/>

                <ProfileStatusWithHooks statusText={status} updateStatusTC={updateStatusTC}/>

                <h3>{profile.fullName}</h3>
            </div>
            <div>
                <span className={s.contact}>
                <h3>Контакты</h3>
                <p><b>vk: </b>{profile.contacts.vk ? profile.contacts.vk : noData}</p>
                <p><b>github: </b>{profile.contacts.github ? profile.contacts.github : noData}</p>
                <p><b>facebook: </b>{profile.contacts.facebook ? profile.contacts.facebook : noData}</p>
                <p><b>twitter: </b>{profile.contacts.twitter ? profile.contacts.twitter : noData}</p>
                <p><b>instagram: </b>{profile.contacts.instagram ? profile.contacts.facebook : noData}</p>
                <p><b>mainLink: </b>{profile.contacts.mainLink ? profile.contacts.mainLink : noData}</p>
                <p><b>website: </b>{profile.contacts.website ? profile.contacts.website : noData}</p>
                <p><b>youtube: </b>{profile.contacts.youtube ? profile.contacts.youtube : noData}</p>
            </span>
                <p><b>Обо мне: </b>{profile.aboutMe}</p>
                <p>
                    <b>Ищу
                        работу: </b>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : noData}
                </p>
            </div>

        </div>
    )
}