import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                <a className={s.title} href={'https://www.linkedin.com/in/yauheni-zhukovets/'} target={'_blank'}
                   rel="noreferrer">Yauheni Zhukovets</a>
                <span className={s.copyright}>© 2022 All Rights Reserved</span>
            </div>
        </footer>
    );
}