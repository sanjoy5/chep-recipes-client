import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast from 'react-hot-toast';

const Recipes = ({ chef }) => {
    const [disabledButtonIds, setDisabledButtonIds] = useState([]);

    const handleFav = (recipeId) => {
        setDisabledButtonIds([...disabledButtonIds, recipeId]);
        toast('Added to the Favorite.');
    };
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="w-100 md:w-10/12 pb-20 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-red-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">All Recipes</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">From kitchen novices to seasoned chefs, our recipes are your go-to for delicious inspiration, every time. Elevate your cooking game and impress your taste buds with each mouth-watering creation.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                        {
                            chef.recipes.map((items) => {

                                const { resipe_id, recipe_name, recipe_image, ingredients, cooking_method, rating } = items;
                                const isDisabled = disabledButtonIds.includes(resipe_id);
                                return (
                                    <>
                                        <div key={resipe_id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                            <div className="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" className="object-cover object-center h-full w-full" src={recipe_image} />
                                            </div>
                                            <h2 className="text-2xl font-medium title-font text-gray-900 mt-5">{recipe_name}</h2>

                                            <div className="flex justify-between items-center">
                                                <div className="my-2 flex items-center gap-2">
                                                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly /> <span>({rating})</span>
                                                </div>

                                                <button onClick={() => handleFav(resipe_id)} disabled={isDisabled} className={`${isDisabled ? 'bg-red-300' : 'bg-red-500'} px-5 py-2 text-white`}>
                                                    {isDisabled ? 'Favorited' : 'Favorite'}
                                                </button>


                                            </div>

                                            <div className="text-base leading-relaxed mt-2">
                                                <p className="text-lg text-dark font-semibold">Cooking Method: </p>
                                                <p className="">{cooking_method}</p>
                                            </div>

                                            <div className="text-base leading-relaxed mt-2"><p className="text-lg text-dark font-semibold">Ingredients: </p>
                                                {ingredients.map(item => (
                                                    <p className="">{item}</p>
                                                ))}</div>

                                        </div>

                                    </>
                                )
                            })
                        }



                    </div>



                </div>
            </section>
        </>
    )
}

export default Recipes