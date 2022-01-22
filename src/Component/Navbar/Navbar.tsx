import React from 'react';
import s from './Navbar.module.css'
import {NavLink, useLocation} from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation()
    const {pathname} = location
    const splitLocation = pathname.split('/')


    return (
        <nav className={s.nav}>
            <div className={splitLocation[1] === 'profile' ? s.activeLink : s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={splitLocation[1] === 'dialogs' ? s.activeLink : s.item}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={splitLocation[1] === 'users' ? s.activeLink : s.item}>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div className={splitLocation[1] === 'news' ? s.activeLink : s.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={splitLocation[1] === 'music' ? s.activeLink : s.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={splitLocation[1] === 'setting' ? s.activeLink : s.item}>
                <NavLink to={'/setting'}>Setting</NavLink>
            </div>
        </nav>
    )
}