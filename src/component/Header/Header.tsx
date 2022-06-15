import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

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
                            <button className={s.headerButton} onClick={onClickHandler}>Log out</button>
                        </div>
                        : <button className={s.headerButton}><NavLink to={'/login'}>Login</NavLink></button>}
                </div>
            </div>
        </header>
    )
}