import React, {useState} from 'react';
import s from './Paginator.module.scss';
import SuperButton from '../SuperButton/SuperButton';
import cn from 'classnames';

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged,
                                                            portionSize,
                                                        }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pagination}>
            <div className={s.buttonContainer}>
                <SuperButton className={s.button}
                             onClick={() => setPortionNumber(portionNumber - 1)}
                             disabled={portionNumber <= 1}
                >
                    Prev list
                </SuperButton>
                <SuperButton disabled={currentPage <= 1}
                             className={s.button}
                             onClick={() => onPageChanged(currentPage - 1)}
                >
                    Prev
                </SuperButton>
                <SuperButton disabled={currentPage >= pagesCount}
                             className={s.button}
                             onClick={() => onPageChanged(currentPage + 1)}
                >
                    Next
                </SuperButton>
                <SuperButton className={s.button}
                             onClick={() => setPortionNumber(portionNumber + 1)}
                             disabled={portionCount <= portionNumber}
                >
                    Next list
                </SuperButton>
            </div>

            <div className={s.text}>Current page: <p className={s.currentNumber}> {currentPage}</p></div>
            <div>
                {pages
                    .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((page, index) => {
                        return (
                            <span key={index}
                                  onClick={() => onPageChanged(page)}
                                  className={cn(s.page, {[s.selectPage]: currentPage === page})}
                            >
                                {page}
                            </span>
                        )
                    })}
            </div>
        </div>
    )
};

