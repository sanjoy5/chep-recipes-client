import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ChefBanner from '../components/ChefBanner';

const ViewRecipes = () => {

    const singleChefRecipes = useLoaderData()
    const chef = singleChefRecipes[0]
    console.log('Single Chef Recipes : ', chef);

    return (
        <div>
            <ChefBanner chef={chef}></ChefBanner>
        </div>
    )
}

export default ViewRecipes