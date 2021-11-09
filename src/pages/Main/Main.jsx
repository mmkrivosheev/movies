import React from 'react';
import Footer from "../../components/Footer/Footer";
import './Main.scss';

const Main = () => {

    return (
        <div className="main">
            <div className="main__title">
                <h1>Вы в разделе: Главная</h1>
            </div>
            <div className="main__body">
                <p>Эта страница в разработке</p>
            </div>
            <Footer />
        </div>
    );
};

export default Main;