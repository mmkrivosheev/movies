import React, {useEffect, useState} from 'react';
import Movies from '../../API/Movies';
import {useFetching} from '../../hooks/useFetching';
import Pagination from '../../components/Pagination/Pagination';
import FilmList from '../../components/FilmList/FilmList';
import Loader from '../../components/UI/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import './Films.scss';

const Films = () => {
    const totalPages = 10;
    const [films, setFilms] = useState([]);
    const [limit, setLimit] = useState(2);
    const [page, setPage] = useState(1);

    const [fetchFilms, isFilmsLoading, filmsError] = useFetching(async (page) => {
        const filmsLimit = [];

        for(let i = 0; i < limit; i++) {
            const response = await Movies.getAll(page + i);
            filmsLimit.push(...response.data.Search);
        }

        setFilms(filmsLimit);
    });

    useEffect(() => {
        fetchFilms(page);
    }, [page, limit]);

    const changePage = (page) => {
        setPage(page);
    };

    // if(filmsError) {
    //     return (
    //         <div className="error">
    //             <h1>Произошла ошибка ${filmsError}</h1>
    //             <Footer />
    //         </div>
    //     );
    // }

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