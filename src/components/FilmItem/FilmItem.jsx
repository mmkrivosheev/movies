import React from 'react';
import {useHistory} from 'react-router-dom';
import './FilmItem.scss';

const FilmItem = props => {
    const history = useHistory();

    return (
        <div className="film">
            <div className="film__poster">
                <img
                    src={props.film.Poster}
                    alt="Постер к фильму"
                    onClick={() => history.push(`/films/${props.film.imdbID}`)}
                />
            </div>
            <div className="film__description">
                <strong onClick={() => history.push(`/films/${props.film.imdbID}`)}>
                    {props.film.Title}
                </strong>
                <span>({props.film.Year})</span>
            </div>
        </div>
    );
};

export default FilmItem;