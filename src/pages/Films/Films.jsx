import React, {useEffect, useState} from 'react';
import Movies from '../../API/Movies';
import {useFetching} from '../../hooks/useFetching';
import Pagination from '../../components/Pagination/Pagination';
import FilmList from '../../components/FilmList/FilmList';
import Loader from '../../components/UI/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import './Films.scss';

const Films = () => {
    // const totalPages = 30;
    const [films, setFilms] = useState([]);
    const [limit, setLimit] = useState(2);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [fetchFilms, isFilmsLoading, filmsError] = useFetching(async (page) => {
        const filmsLimit = [];
        let totalResults;

        for(let i = 0; i < limit; i++) {
            const response = await Movies.getAll(page + i);
            filmsLimit.push(...response.data.Search);
            totalResults = response.data.totalResults;
        }

        setFilms(filmsLimit);
        setTotalPages(Math.ceil(totalResults / limit));
    });

    useEffect(() => {
        fetchFilms(page);
    }, [page, limit]);

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="films">
            {isFilmsLoading
                ? <Loader />
                : <div>
                    <FilmList
                        limit={limit}
                        setLimit={setLimit}
                        films={films}
                        title="Вы в разделе: Фильмы"
                    />
                    <div className="films__pagination">
                        <Pagination
                            page={page}
                            changePage={changePage}
                            totalPages={totalPages}
                        />
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
};

export default Films;