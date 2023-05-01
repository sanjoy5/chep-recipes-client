import React from 'react'

const Services = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="w-100 md:w-10/12 px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <h2 className="text-3xl font-bold">01</h2>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Real Test</h2>
                                <p className="leading-relaxed text-base">We take pride in offering real taste food that is made with fresh and high-quality in our flavorful recipes and experience the true pleasure of eating.</p>
                                <a className="mt-3 text-red-500 inline-flex items-center border border-red-500 py-2 px-5"> More

                                </a>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 flex flex-col">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <h2 className="text-3xl font-bold">02</h2>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Best Chefs</h2>
                                <p className="leading-relaxed text-base">Our recipes from the best chefs in the world. These culinary experts share their passion and expertise to bring you the most innovative and delicious dishes.</p>
                                <a className="mt-3 text-red-500 inline-flex items-center border border-red-500 py-2 px-5"> More

                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                <h2 className="text-3xl font-bold">03</h2>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Best Recipes</h2>
                                <p className="leading-relaxed text-base">Discover our  best recipes for every occasion. From classic comfort foods to gourmet dishes, our selection is curated to ensure every meal is a memorable one.</p>
                                <a className="mt-3 text-red-500 inline-flex items-center border border-red-500 py-2 px-5">More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services