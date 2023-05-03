import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveLinks from './ActiveLinks'
import { useAuthContext } from '../Provider/AuthProvider'

const Header = () => {

    const { user, loading, logOut } = useAuthContext()
    const [showInfo, setShowInfo] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <>

            <header className="text-gray-600 body-font">
                <div className="w-100 md:w-10/12 mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" width={180} alt="" />
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ActiveLinks to='/' >Home</ActiveLinks>
                        <ActiveLinks to='/services' >Services</ActiveLinks>
                        <ActiveLinks to='/chefs' >Chefs</ActiveLinks>
                        <ActiveLinks to='/blogs' >Blogs</ActiveLinks>
                        <ActiveLinks to='/contact' >Contact</ActiveLinks>
                        {
                            user ?
                                <>
                                    <Link to='' className='flex items-center gap-2 relative'>


                                        <div className="tooltip tooltip-bottom" data-tip={`Welcome... ${user?.displayName}`}>
                                            <img src={user?.photoURL} className='h-12 w-12 rounded-full object-cover object-top' alt="" />
                                        </div>


                                        <button onClick={handleLogOut} className="inline-flex items-center bgc-primary border-0 py-2 px-6 ml-4 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Logout
                                        </button>
                                    </Link>

                                </>
                                : <>

                                    <Link to='/login' className="inline-flex items-center bgc-primary border-0 py-2 px-6 mr-5 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Login
                                    </Link>
                                    <Link to='/register' className="inline-flex items-center bgc-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Register
                                    </Link>
                                </>
                        }

                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header