import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/context';
import Button from '../UI/Button/Button';
import './Navbar.scss'

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <nav className="nav-bar">
            {isAuth
                ?<Button onClick={logout}>Выйти</Button>
                : null
            }
            {!isAuth
                ? <Link className="nav-link" to="/login">
                    <Button>Логин</Button>
                </Link>
                : null
            }
            <div className="nav-bar__links">
                <NavLink className="nav-link" exact to="/">Главная</NavLink>
                <NavLink className="nav-link" to="/about">О сайте</NavLink>
                {isAuth
                    ? <NavLink className="nav-link" to="/films">Фильмы</NavLink>
                    : null
                }
            </div>
        </nav>
    );
};

export default NavBar;