import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';
import {ProfileType} from '../../../Redux/profileReducer';
import s from './ProfileInfo.module.css'

type ProfileDataFormType = {
    profile: ProfileType;
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = (props) => {
    const {error, handleSubmit, profile} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>
                    <b>Full name</b> :
                    <Field name={'fullName'} component={Input} placeholder={'Full name'}/>
                </p>
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key, index) => {
                    return (
                        <div className={s.contactValue} key={index}>
                            <b>{key}</b> : <Field name={'contacts.' + key} component={Input} placeholder={key}/>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>
                    <b>looking for a job</b> :
                    <Field name={'lookingForAJob'} component={Input} type={'checkbox'}/>
                </p>
            </div>

            <div>
                <p>
                    <b>My skills</b> :
                    <Field name={'lookingForAJobDescription'} component={Textarea} placeholder={'My skills'}/>
                </p>
            </div>

            <div>
                <p>
                    <b>About me</b> :
                    <Field name={'aboutMe'} component={Textarea} placeholder={'About me'}/>
                </p>
            </div>
            
            <div>
                <button>save</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm