import React from 'react';
import preload from '../../../assets/images/Spinner.svg';
import s from '../Preloader/Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img style={{height: 120, width: 120}} src={preload} alt={'preloader'}/>
        </div>
    );
};
