import React from 'react'
import { Link } from 'react-router-dom'
import ActiveLinks from './ActiveLinks'

const Header = () => {
    return (
        <>

            <header className="text-gray-600 body-font">
                <div className="w-100 md:w-10/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" width={180} alt="" />
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ActiveLinks to='/' >Home</ActiveLinks>
                        <ActiveLinks to='/services' >Services</ActiveLinks>
                        <ActiveLinks to='/chefs' >Chefs</ActiveLinks>
                        <ActiveLinks to='/blogs' >Blogs</ActiveLinks>
                        <ActiveLinks to='/contact' >Contact</ActiveLinks>
                    </nav>
                    <button className="inline-flex items-center bgc-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Login
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header