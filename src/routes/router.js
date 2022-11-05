import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Orders from '../components/Orders/Orders';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import Checkout from '../components/Pages/Checkout/Checkout';
import Contact from '../components/Pages/Contact/Contact';
import ErrorPage from '../components/Pages/ErrorPage';
import Home from '../components/Pages/Home/Home';
import Services from '../components/Pages/Services/Services';
import Main from '../layouts/Main';
import PrivateRoute from './PrivateRoute';

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
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute> <Checkout /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${ params.id }`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            }

        ]
    }

])

export default router;
