import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import About from '../components/Pages/About';
import Blog from '../components/Pages/Blog';
import Contact from '../components/Pages/Contact';
import ErrorPage from '../components/Pages/ErrorPage';
import Home from '../components/Pages/Home';
import Services from '../components/Pages/Services';
import Main from '../layouts/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }

])

export default router;
