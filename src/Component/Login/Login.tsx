import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../Redux/authReducer';
import {LoginParamsType} from '../../API/api';
import {AppStateType} from '../../Redux/reduxStore';
import {Navigate} from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm: React.FC<InjectedFormProps<LoginParamsType>> = (props) => {
    const {handleSubmit, error} = props

    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[required]} name={'email'} component={Input} placeholder={'Email'}/></div>
            <div><Field validate={[required]} name={'password'} component={Input} placeholder={'Password'}
                        type={'password'}/></div>
            <div><Field name={'rememberMe'} component={Input} type={'checkbox'}/>remember me</div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginParamsType>({form: 'login'})(LoginForm)

const Login = ({loginTC,isAuth,}: LoginContainerType) => {

    const onSubmit = (formData: LoginParamsType) => {
        loginTC(formData)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)

type LoginContainerType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    isAuth: boolean
}
type MapDispatchToProps = {
    loginTC: Function
}