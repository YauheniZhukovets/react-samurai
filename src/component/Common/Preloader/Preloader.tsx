import React from 'react';
import preload from '../../../assets/images/Spinner.svg';
import s from '../Preloader/Preloader.module.css'

export const Preloader:React.FC = () => {
    return (
        <>
            <img className={s.preloader} src={preload} alt={'preloader'}/>
        </>
    );
};
