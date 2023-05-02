import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home';
import ViewRecipes from '../pages/ViewRecipes';

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
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/chef/${params.chef_id}`)
            },
        ],
    },
]);

export default router