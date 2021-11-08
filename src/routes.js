import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Films from "./pages/Films/Films";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/films', component: Films, exact: true},
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/about', component: About, exact: true}
];