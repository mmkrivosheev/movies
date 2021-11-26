import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useFetching} from '../../hooks/useFetching';
import Movies from '../../API/Movies';
import Loader from '../../components/UI/Loader/Loader';
import Button from '../../components/UI/Button/Button';
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import './FilmById.scss'

const FilmById = () => {
    const history = useHistory();
    const params = useParams();
    const [filmById, setFilmById] = useState({});
    const [isModal, setIsModal] = useState(false);

    const [fetchFilmId, isLoading, filmError] = useFetching(async (id) => {
        const response = await Movies.getById(id);
        setFilmById(response.data);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchFilmId(params.id);
    }, []);

    return (
        <div>
            <Modal
                visible={isModal}
                setVisible={setIsModal}
            >
                <img src={filmById.Poster} alt="Постер к фильму"/>
            </Modal>
            {isLoading
                ? <Loader />
                : <div className="film-more">
                    <div className="film-more__title">
                        <h1>Вы в разделе: Описание фильма</h1>
                    </div>
                        <div className="film-more__more">
                            <div
                                className="film-more__poster"
                                onClick={() => setIsModal(true)}
                            >
                                <img src={filmById.Poster} alt="Постер к фильму"/>
                            </div>
                            <div className="film-more__description">
                                <Button onClick={() => history.goBack()}>Назад</Button>
                                <div>{filmById.Title}</div>
                                <div>
                                    <span>Год:</span>
                                    <span>{filmById.Year}</span>
                                </div>
                                <div>
                                    <span>Жанр:</span>
                                    <span>{filmById.Genre}</span>
                                </div>
                                <div>
                                    <span>Страна:</span>
                                    <span> {filmById.Country}</span>
                                </div>
                                <div>
                                    <span>В ролях:</span>
                                    <span>{filmById.Actors}</span>
                                </div>
                                <div>
                                    <span>Описание:</span>
                                    <span>{filmById.Plot}</span>
                                </div>
                                <div>
                                    <span>Язык:</span>
                                    <span>{filmById.Language}</span>
                                </div>
                                <div>
                                    <span>Время:</span>
                                    <span>{filmById.Runtime}</span>
                                </div>
                                <div>
                                    <span>Рейтинг IMDb:</span>
                                    <span>{filmById.imdbRating}</span>
                                </div>

                            </div>
                        </div>
                </div>
            }
            <Footer />
        </div>
    );
};

export default FilmById;