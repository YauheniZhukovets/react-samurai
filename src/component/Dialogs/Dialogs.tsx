import React from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {DialogItems} from './DialogsItem/DialogsItem';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../Common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Avatar} from './Avatar/Avatar';
import SuperButton from '../Common/SuperButton/SuperButton';


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, AddMessage,}) => {

    const dialogElement = dialogsPage.dialogsData.map((m) => <DialogItems key={m.id} name={m.name} id={m.id}/>)
    const messageElement = dialogsPage.massagesData.map((m) => <Message key={m.id} message={m.message}/>)
    const avatarElement = dialogsPage.avatarData.map((m) => <Avatar key={m.id} avatar={m.link}/>)

    const addNewMessage = (values: FormDataType) => {
        AddMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                <div className={s.avatarContainer}>
                    {avatarElement}
                </div>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
            </div>
            <div className={s.messages}>
                <div>
                    {messageElement}
                </div>
                <div className={s.formContainer}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}


type FormDataType = {
    newMessageBody: string
}

const maxLength = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props

    return (<form onSubmit={handleSubmit}>
            <div>
                <Field className={s.formTextarea}
                       component={Textarea}
                       validate={[required, maxLength]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                />
            </div>
            <div className={s.buttonDialogs}>
                <SuperButton type={'submit'}>Send</SuperButton>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)