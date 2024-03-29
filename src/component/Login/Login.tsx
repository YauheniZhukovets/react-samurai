import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../Common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import style from '../Common/FormsControls/FormsControls.module.css'
import s from './Login.module.scss'
import SuperButton from '../Common/SuperButton/SuperButton';
import {LoginParamsType} from 'api/types';
import {required} from 'utils/validators/validators';
import {loginTC} from 'store/redusers/authReducer';
import {AppStateType} from 'store/types';



type LoginFormType = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginParamsType, LoginFormType> & LoginFormType> = (props) => {
    const {handleSubmit, error, captcha} = props

    return (
        <form className={s.formContainer} onSubmit={handleSubmit}>
            <div className={s.fieldWrapper}>
                <Field className={s.input}
                       validate={[required]}
                       name={'email'}
                       component={Input}
                       placeholder={'Email'}/>
            </div>
            <div className={s.fieldWrapper}>
                <Field className={s.input}
                       validate={[required]}
                       name={'password'}
                       component={Input}
                       placeholder={'Password'}
                       type={'password'}/>
            </div>
            <div className={s.fieldWrapper}>
                <Field className={s.checkbox}
                       name={'rememberMe'}
                       component={Input}
                       type={'checkbox'}/>
                <span style={{paddingLeft: 5}}> remember me </span>
            </div>
            <div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </div>
            <div>
                {captcha && <img src={captcha} alt="captcha"/>}
                {captcha &&
                    <div className={s.fieldWrapper}>
                        <Field className={s.input}
                               validate={[required]}
                               name={'captcha'}
                               component={Input}
                               placeholder={'Symbols from image'}/>
                    </div>}
            </div>
            <div className={s.fieldWrapper}>
                <SuperButton type={'submit'}>Login</SuperButton>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginParamsType, LoginFormType>({form: 'login'})(LoginForm)

type MapStateToProps = {
    isAuth: boolean
    captcha: string | null
}
type MapDispatchToProps = {
    loginTC: (formData: LoginParamsType) => void
}

type LoginContainerPropsType = MapDispatchToProps & MapStateToProps

const Login:React.FC<LoginContainerPropsType> = ({loginTC, isAuth, captcha}) => {

    const onSubmit = (formData: LoginParamsType) => {
        loginTC(formData)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div className={s.login}>
        <div className={s.loginTextContainer}>
            <p>To log in get registered
                <a href="https://social-network.samuraijs.com/" target="_blank" rel="noreferrer"> here</a>
            </p>
            <p>Or use common test account credentials:</p>
            <p><b>Email</b>: free@samuraijs.com</p>
            <p><b>Password</b>: free</p>
        </div>
        <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl,
})

export default connect<MapStateToProps, MapDispatchToProps, unknown, AppStateType>(mapStateToProps, {loginTC})(Login)

