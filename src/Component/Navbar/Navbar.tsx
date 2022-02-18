import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={setActive} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/users'}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/news'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/music'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={setActive} to={'/setting'}>Setting</NavLink>
            </div>
        </nav>

    )
}