import React from 'react';
import s from './Video.module.scss'

export const Video: React.FC = () => {

    return (
        <div className={s.videoContainer}>
            <div className={s.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/La-z8XjkAsQ"
                        title="АУТКАСТ - Невесомость I (официальный клип)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={s.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HtgXvWYpvYo"
                        title="[AMATORY] - Снег в Аду 2.021"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={s.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/51naqspPueE"
                        title="АУТКАСТ - Лабиринт (официальный клип 2021)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={s.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_qObe8-8VdE"
                        title="[AMATORY] - Звёздная грязь (Official video)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}