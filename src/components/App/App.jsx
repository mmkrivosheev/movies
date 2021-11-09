import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import AppRouter from '../AppRouter/AppRouter';
import {AuthContext} from '../../context/context';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter basename="/movies">
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;