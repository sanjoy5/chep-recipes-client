import React from 'react'
import { BiLike } from 'react-icons/bi';
const ChefBanner = ({ chef }) => {

    const { chef_name, chef_picture, bio, likes, years_of_experience, numbers_of_recipes } = chef;

    return (
        <div className='w-100 md:w-10/12 mx-auto mb-24 px-5'>
            <div className="h-full w-full grid grid-cols-1 pt-10 items-center md:grid-cols-2 gap-10 px-4 md:px-10 chefbanner">
                <div className="max-w-[250px] w-100 mx-auto order-3 md:order-2">
                    <img src={chef_picture} alt="" className="object-cover object-center rounded w-full" />
                </div>
                <div className="text-center md:text-left text-white order-1 md:order-4">
                    <h2 className="title-font font-medium text-4xl">{chef_name}</h2>
                    <h3 className="my-3 text-xl font-medium">Experience: {years_of_experience} year</h3>
                    <p className="mb-3 text-xl font-medium">Bio : {bio}</p>
                    <div className='flex items-center justify-center sm:justify-start gap-4 mb-4'>
                        <p className="text-xl font-medium">Recipes: {numbers_of_recipes} </p>
                        <p className="flex items-center gap-1"><BiLike className='text-xl' /> <span className="text-xl font-medium">{likes}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChefBanner