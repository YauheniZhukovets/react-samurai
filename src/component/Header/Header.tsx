import React from 'react'
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import SuperButton from '../Common/SuperButton/SuperButton';

type HeaderPropsType = {
    login: null | string
    isAuth: boolean
    logoutTC: Function
}

export const Header = ({login, isAuth, logoutTC,}: HeaderPropsType) => {
    const onClickHandler = () => {
        logoutTC()
    }

    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <img className={s.headerLogo} src={logo}
                     alt="logo"/>
                <div className={s.loginBlock}>
                    {isAuth
                        ? <div>
                            <span className={s.headerLogin}>{login}</span>
                            <SuperButton className={s.headerButton} onClick={onClickHandler}>Log out</SuperButton>
                        </div>
                        : <SuperButton className={s.headerButton}><NavLink to={'/login'}>Login</NavLink></SuperButton>}
                </div>
            </div>
        </header>
    )
}