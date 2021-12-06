import React, {useEffect, useState} from 'react';
import './Pagination.scss'

const Pagination = ({totalPages, page, changePage}) => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');
    const [matches, setMatches] = useState(mediaQuery.matches);
    const totalPagesShow = matches ? 4 : 7;
    let pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }

    function pagesArraySlice(pagesArray) {

        if(page <= totalPagesShow / 2) {
            return pagesArray.slice(0, totalPagesShow);
        }

        return pagesArray.slice(page - totalPagesShow / 2, page + totalPagesShow / 2);
    }

    function handleTabletChange(e) {
            setMatches(e.matches);
    }

    useEffect(() => {
        mediaQuery.addEventListener('change', handleTabletChange);
        return () => {
            mediaQuery.removeEventListener('change', handleTabletChange);
        }
    });


    return (
        <div className="page__wrapper">
            <span
                className={page === 1 ? "page end": "page"}
                onClick={page === 1
                    ? null
                    : () => changePage(page - 1)
                }
            >
                &#60;
            </span>
            {pagesArraySlice(pagesArray).includes(1)
                ? null
                : <>
                    <span
                        className="page"
                        onClick={() => changePage(1)}
                    >
                    1
                    </span>
                    <span className="page dots">...</span>
                </>
            }
            {pagesArraySlice(pagesArray).map(p =>
                 <span
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
            {pagesArraySlice(pagesArray).includes(totalPages)
                ? null
                : <>
                    <span className="page dots">...</span>
                    <span
                    className="page"
                    onClick={() => changePage(totalPages)}
                    >
                    {totalPages}
                    </span>
                </>
            }
            <span
                className={page === totalPages ? "page end": "page"}
                onClick={page === totalPages
                    ? null :
                    () => changePage(page + 1)
                }
            >
                &#62;
            </span>
        </div>
    );
};

export default Pagination;