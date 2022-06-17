import React from 'react';
import preload from '../../../assets/images/Spinner.svg';
import s from '../Preloader/Preloader.module.css'

export const Preloader = () => {
    return (
        <>
            <img className={s.preloader} src={preload} alt={'preloader'}/>
        </>
    );
};
