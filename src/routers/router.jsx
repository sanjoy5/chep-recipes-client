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
                element: <ViewRecipes></ViewRecipes>,
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
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ],
    },
]);

export default router