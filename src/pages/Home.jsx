import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Chefs from '../components/Chefs'
import { useLoaderData } from 'react-router-dom'
import Contact from '../components/Contact'

const Home = () => {

    const chefs = useLoaderData()
    console.log('Chefs : ', chefs);
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Chefs chefs={chefs} />

            <Contact></Contact>
        </>
    )
}

export default Home