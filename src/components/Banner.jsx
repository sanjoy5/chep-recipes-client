import React from 'react'

const Banner = () => {
    return (
        <>
            <section class="text-gray-600 body-font relative bgc-primary">
                <div class="w-full md:w-10/12 mx-auto flex px-5 pt-12 md:flex-row flex-col items-center herosection">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 sm:py-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl lg:text-4xl xl:5xl mb-4 font-bold text-gray-900">It's All About
                            <br /><span className="text-red-500"> Good Food</span> & Test
                        </h1>
                        <p class="mb-8 md:mb-4 lg:mb-8 leading-relaxed">Welcome to our food website, your ultimate destination for delicious recipes and culinary inspiration. Our platform offers a wide range of recipes for every taste and occasion, from quick and easy weeknight meals to gourmet dishes for special occasions.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none  hover:bg-red-600 rounded text-lg">Explore Food</button>

                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded align-bottom" alt="hero" src="https://i.ibb.co/KDtk20H/chefs2.png" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner