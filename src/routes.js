import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Films from "./pages/Films/Films";
import FilmById from "./pages/FilmById/FilmById";

export const privateRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/films', component: Films, exact: true},
    {path: '/films/:id', component: FilmById, exact: true}
];

export const publicRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/about', component: About, exact: true}
];