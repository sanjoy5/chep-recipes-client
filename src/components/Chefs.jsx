import React from 'react'
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chefs = ({ chefs }) => {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="w-100 md:w-10/12 px-5 py-14 md:pb-20 md:pt-16 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Chefs</h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div>
                    </div>
                    <LazyLoad height='100%'>
                        <div className="flex flex-wrap -m-4">
                            {
                                chefs?.map(chef => (


                                    <div key={chef.id} className="p-4 lg:w-1/2">
                                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-top sm:mb-0 mb-4" src={chef.chef_picture} />
                                            <div className="flex-grow sm:pl-8">
                                                <h2 className="title-font font-medium text-lg text-gray-900">{chef.chef_name}</h2>
                                                <h3 className="text-gray-500 mb-2">Experience: {chef.years_of_experience} year</h3>
                                                <p className="mb-2">{chef.bio}</p>
                                                <div className='flex items-center justify-center sm:justify-start gap-4 mb-4'>
                                                    <p className="">Recipes: {chef.numbers_of_recipes} </p>
                                                    <p className="flex items-center gap-1"><BiLike className='text-xl text-red-500' /> <span className="">{chef.likes}</span></p>
                                                </div>
                                                <span className="inline-flex">
                                                    <Link to={`/recipes/${chef.id}`} className="py-2 px-5 rounded bgc-primary">View Recipes</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>



                                ))
                            }



                        </div>
                    </LazyLoad>
                </div>
            </section>
        </>
    )
}

export default Chefs