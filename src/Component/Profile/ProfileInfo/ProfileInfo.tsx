import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../Redux/profileReducer';
import userPhoto from '../../../assets/images/userIcon.png';


type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const noData = 'не указан'
    return (
        <div className={s.profileBlock}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27oZW3GPaCyGG172TNgXUjfyJxSq-ETp2AA&usqp=CAU"
                    alt="img"/>
            </div>
            <div className={s.discriptionBlock}>
                <img className={s.userPhoto} src={props.profile.photos.small ? props.profile.photos.small : userPhoto}
                     alt={'img'}/>
                <h3>{props.profile.fullName}</h3>
            </div>
            <div>
                <span className={s.contact}>
                <h3>Контакты</h3>
                <p><b>vk: </b>{props.profile.contacts.vk ? props.profile.contacts.vk : noData}</p>
                <p><b>github: </b>{props.profile.contacts.github ? props.profile.contacts.github : noData}</p>
                <p><b>facebook: </b>{props.profile.contacts.facebook ? props.profile.contacts.facebook : noData}</p>
                <p><b>twitter: </b>{props.profile.contacts.twitter ? props.profile.contacts.twitter : noData}</p>
                <p><b>instagram: </b>{props.profile.contacts.instagram ? props.profile.contacts.facebook : noData}</p>
                <p><b>mainLink: </b>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : noData}</p>
                <p><b>website: </b>{props.profile.contacts.website ? props.profile.contacts.website : noData}</p>
                <p><b>youtube: </b>{props.profile.contacts.youtube ? props.profile.contacts.youtube : noData}</p>
            </span>
                <p><b>Обо мне: </b>{props.profile.aboutMe}</p>
                <p><b>Мои скиллы: </b>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : noData}</p>
            </div>

        </div>
    )
}