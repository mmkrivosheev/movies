import React, {useContext} from 'react';
import {AuthContext} from '../../context/context';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Footer from "../../components/Footer/Footer";
import './Login.scss'

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div className="login">
            <div className="login__title">
                <h1>Вы в разделе: Авторизация на сайте</h1>
            </div>
            <div className="login__body">
                <form onSubmit={login}>
                    <div>
                        <label>Логин</label>
                        <Input
                            className="login__input"
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Пароль</label>
                        <Input
                            className="login__input"
                            type="password"
                        />
                    </div>
                    <Button>Войти</Button>
                </form>
            </div>
            <p>
                <span>Авторизация в разработке.</span>
                Для входа просто нажмите "Войти"
            </p>
            <Footer />
        </div>
    );
};

export default Login;