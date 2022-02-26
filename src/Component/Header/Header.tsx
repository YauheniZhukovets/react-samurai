import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/userIcon.png';

type HeaderPropsType = {
    login: null | string
    isAuth: boolean
    logoutTC: Function
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={()=>props.logoutTC()}>Log out</button></div>
                    : <NavLink to={'/login'}>
                        <img src={userPhoto} alt="123"/>Login</NavLink>}
            </div>
        </header>
    )
}