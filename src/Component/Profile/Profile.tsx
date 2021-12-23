import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType, RootStateType} from '../../Redux/state';

type ProfileType = {
    state:RootStateType
    // profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
                // profilePage={props.profilePage}
            />
        </div>
    )
}