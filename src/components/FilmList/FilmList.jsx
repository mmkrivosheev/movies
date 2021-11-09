import React from 'react';
import FilmItem from '../FilmItem/FilmItem';
import Select from '../UI/Select/Select';
import './FilmList.scss'

const FilmList = ({films, title, limit, setLimit}) => {
    window.scrollTo(0, 0);

    return (
        <div className="films-list">
            <div className="films-list__title">
                <h1>{title}</h1>
            </div>
            <div className="films-list__body">
                <div className="films-list__limit">
                    <span>Показывать по:</span>
                    <Select
                        value={limit}
                        onChange={value => setLimit(value)}
                        options={[
                            {value: 2, name: '20'},
                            {value: 4, name: '40'},
                            {value: 6, name: '60'},
                            {value: 8, name: '80'},
                            {value: 10, name: '100'}
                        ]}
                    />
                </div>
                <div className="films-list__list">
                    {films.map(film => {
                        return <FilmItem
                            key={Math.random()}
                            film={film} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilmList;