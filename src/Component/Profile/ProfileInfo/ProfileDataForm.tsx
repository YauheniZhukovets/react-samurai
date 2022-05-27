import {ProfileType} from '../../../Redux/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';
import React from 'react';

export type ProfileDataFormType = {
    profile: ProfileType
}
export const ProfileDataForm = ({profile}: ProfileDataFormType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <form>
            <div><b>Full name</b>: {profile.fullName}</div>
            <div>
                {<button onClick={()=>{}}>save</button>}
            </div>
           {/* <div className={s.contact}>
                <b>Contacts</b>:
                {keysContacts.map((key, index) => {
                    return <Contact key={index} contactTitle={key} contactValue={valuesContacts[index]}/>
                })}
            </div>*/}
            <p><b>Ищу работу: </b>{profile.lookingForAJob ? 'yas' : 'no'}</p>
            {profile.lookingForAJob &&
                <div>
                    <p><b>My skills: </b>{profile.lookingForAJobDescription}</p>
                </div>}
            <p><b>Обо мне: </b>{profile.aboutMe}</p>
        </form>
    )
}
