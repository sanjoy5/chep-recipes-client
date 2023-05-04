import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home';
import ViewRecipes from '../pages/ViewRecipes';
import Services from '../components/Services';
import Chefs from '../components/Chefs';
import ChefsforRoute from '../pages/ChefsforRoute';
import ErrorPage from '../pages/ErrorPage';
import Contact from '../components/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://127.0.0.1:5000/chefs')
            },
            {
                path: "/recipes/:chef_id",
                element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/chefs/${params.chef_id}`)
            },
            {
                path: "/services",
                element: <Services></Services>,

            },
            {
                path: "/chefs",
                element: <ChefsforRoute></ChefsforRoute>,
                loader: () => fetch('http://127.0.0.1:5000/chefs')
            },
            {
                path: "/contact",
                element: <Contact></Contact>,

            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,

            },
            {
                path: "/blogs",
                element: <Blog></Blog>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ],
    },
]);

export default router