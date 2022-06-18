import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../Common/FormsControls/FormsControls';
import {ProfileType} from '../../../../redux/profileReducer';
import s from './ProfileDataForm.module.scss'
import SuperButton from '../../../Common/SuperButton/SuperButton';

type ProfileDataFormType = {
    profile: ProfileType;
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = (props) => {
    const {error, handleSubmit, profile} = props

    return (
        <form onSubmit={handleSubmit} className={s.editFormContainer}>
            <div>
                <div>
                    <SuperButton>
                        Save
                    </SuperButton>
                </div>
                <div>
                    <p>
                        <b>Full name</b> :
                        <Field className={s.formInput} name={'fullName'} component={Input} placeholder={'Full name'}/>
                    </p>
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
                        <Field className={s.formTextarea} name={'lookingForAJobDescription'} component={Textarea}
                               placeholder={'My skills'}/>
                    </p>
                </div>

                <div>
                    <p>
                        <b>About me</b> :
                        <Field className={s.formTextarea} name={'aboutMe'} component={Textarea}
                               placeholder={'About me'}/>
                    </p>
                </div>
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key, index) => {
                    return (
                        <div className={s.contactValue} key={index}>
                            <b>{key}</b> : <Field className={s.formInput} name={'contacts.' + key} component={Input}
                                                  placeholder={key}/>
                        </div>
                    )
                })}
            </div>

            {error && <div className={s.formSummaryError}>{error}</div>}
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm