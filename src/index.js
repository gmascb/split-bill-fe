import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route, useRoutes, Navigate, useNavigate} from 'react-router-dom';
import ListCarts from '../src/routes/ListCarts';
import Cart from '../src/routes/Cart';
import App from "./App";
import {Login, Register} from "./components";
import ErrorPage from "./routes/ErrorPage";
import {CreateCart} from "./components/CreateCart";
import {CreateProduct} from "./components/CreateProduct";
import {JoinCart} from "./components/JoinCart";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/login" replace />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'carts',
                element: <ListCarts />,
            },
            {
                path: 'cart/:id',
                element: <Cart />,
            },
            {
                path: 'createCart',
                element: <CreateCart />,
            },
            {
                path: 'addProduct/:id',
                element: <CreateProduct />,
            },
            {
                path: 'joinCart',
                element: <JoinCart />,
            },
        ],
    },
];

const Redirect = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/login', { replace: true });
    }, [navigate]);

    return null;
};

const AppWithRedirect = () => {
    const routeResult = useRoutes(routes);
    return (
        <>
            <Route path="/" element={<Redirect />} />
            {routeResult}
        </>
    );
};

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} routes={routes}>
            <AppWithRedirect />
        </RouterProvider>
    </React.StrictMode>
);

reportWebVitals();