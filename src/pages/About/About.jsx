import React from 'react';
import './About.scss'
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (
        <div className="about">
            <div className="about__title">
                <h1>Вы в разделе: О сайте</h1>
            </div>
            <div className="about__body">
                <p>Эта страница в разработке</p>
            </div>
            <Footer />
        </div>
    );
};

export default About;