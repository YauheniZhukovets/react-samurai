import React, {useState} from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    totalItemsCount: number
    portionSize: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({
                              totalItemsCount,
                              pageSize,
                              currentPages,
                              onPageChanged,
                              portionSize,
                          }: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {
            portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>{`<`}</button>
        }

        {pages
            .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page, index) => {
                return <span style={{cursor: 'pointer'}}
                             key={index}
                             onClick={(e) => {onPageChanged(page)}}
                             className={currentPages === page ? s.selectedPage : ''}> {page}
                    </span>
            })}

        {
            portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>{`>`}</button>
        }

    </div>;
};

