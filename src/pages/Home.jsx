import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Chefs from '../components/Chefs'
import { useLoaderData } from 'react-router-dom'
import Contact from '../components/Contact'

const Home = () => {

    const chefs = useLoaderData()
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Chefs chefs={chefs} />

            <div className="offer p-10 rounded mb-24 w-full md:w-10/12 mx-auto">

                <div className="flex items-center justify-center flex-wrap gap-6">
                    <h2 className="text-3xl font-bold text-white">Are You a <span className="text-dark">Chef ? </span></h2>
                    <button className="py-3 px-6 bgc-primary rounded text-lg font-semibold">Submit A Recipe</button>
                </div>
                {/* <img src="https://i.ibb.co/ssKhW8Z/chef1.png" className='w-full md:w-2/5' alt="" /> */}

            </div>

            <Contact></Contact>
        </>
    )
}

export default Home