import React from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize,currentPages,onPageChanged,}: PaginatorPropsType) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, i) => {
                return <span style={{cursor: 'pointer'}}
                             key={i} onClick={() => {
                    onPageChanged(p)
                }}
                             className={currentPages === p ? s.selectedPage : ''}> {p}
                    </span>
            })}
        </div>
    </div>;
};

