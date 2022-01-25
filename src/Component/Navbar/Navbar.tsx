import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

export const Navbar = () => {
    /*
        const location = useLocation()
        const {pathname} = location
        const splitLocation = pathname.split('/')
    */
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
        /*<nav className={s.nav}>
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
        </nav>*/
    )
}