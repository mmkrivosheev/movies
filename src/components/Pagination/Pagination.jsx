import React from 'react';
import './Pagination.scss'

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current': 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;