import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItems} from './DialogsItem/DialogsItem';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';


export const Dialogs = (props: DialogsPropsType) => {

    const dialogElement = props.dialogsPage.dialogsData.map((m) => <DialogItems key={m.id} name={m.name} id={m.id}/>)

    const messageElement = props.dialogsPage.massagesData.map((m) => <Message key={m.id} message={m.message}/>)


    const addNewMessage = (values: FormDataType) => {
        props.AddMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    <div>{messageElement}</div>
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
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea }
                       validate={[required, maxLength]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button type={'submit'}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)