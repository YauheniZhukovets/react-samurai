import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../Redux/state';

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                profilePage={props.profilePage}
            />
        </div>
    )
}