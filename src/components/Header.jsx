import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ActiveLinks from './ActiveLinks'
import { useAuthContext } from '../Provider/AuthProvider'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {

    const { user, loading, logOut } = useAuthContext()
    const [toggle, setToggle] = useState(true)

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
                <div className="w-100 md:w-10/12 mx-auto flex flex-wrap py-5 flex-col md:flex-row  md:items-center relative">
                    <Link to='/' className='mr-auto hidden md:block'>
                        <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" className='w-44' alt="" />
                    </Link>

                    <div className="flex justify-between items-center px-4">
                        <Link to='/' className='md:hidden'>
                            <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" className='w-40' alt="" />
                        </Link>

                        <div className='flex items-center gap-4'>

                            <div onClick={() => setToggle(!toggle)} className="md:hidden">
                                {
                                    toggle ? <FaBars className='text-2xl cursor-pointer color-primary' />
                                        : <FaTimes className='text-3xl cursor-pointer text-red-500' />
                                }
                            </div>
                            {
                                user && <div title={`${user?.displayName}`} className="md:hidden" data-tip={`Welcome... ${user?.displayName}`}>
                                    <Link to=""> <img src={user?.photoURL} className='h-10 w-10 rounded-full object-cover object-top' alt="" /></Link>
                                </div>
                            }

                        </div>
                    </div>

                    {
                        !toggle ? <>

                            <nav className="ml-auto flex flex-wrap flex-col md:hidden text-base absolute right-5 top-24 bg-gray-100 py-5 px-10 z-10 text-right">
                                <ActiveLinks to='/' >Home</ActiveLinks>
                                <ActiveLinks to='/services' >Services</ActiveLinks>
                                <ActiveLinks to='/chefs' >Chefs</ActiveLinks>
                                <ActiveLinks to='/blogs' >Blogs</ActiveLinks>
                                <ActiveLinks to='/contact' >Contact</ActiveLinks>
                                {
                                    user ? <>
                                        <button onClick={handleLogOut} className="inline-flex items-center bgc-primary border-0 py-2 px-6 md:ml-4 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Logout
                                        </button>

                                    </> : <>

                                        <Link to='/login' className="bgc-primary border-0 py-2 px-6 text-center focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Login
                                        </Link>
                                        <Link to='/register' className="bgc-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 text-center">Register
                                        </Link>

                                    </>
                                }

                            </nav>

                        </> : ''
                    }



                    <nav className="ml-auto flex-wrap flex-col md:flex-row hidden md:flex items-center text-base justify-center">
                        <ActiveLinks to='/' >Home</ActiveLinks>
                        <ActiveLinks to='/services' >Services</ActiveLinks>
                        <ActiveLinks to='/chefs' >Chefs</ActiveLinks>
                        <ActiveLinks to='/blogs' >Blogs</ActiveLinks>
                        <ActiveLinks to='/contact' >Contact</ActiveLinks>
                        {
                            user ?
                                <>
                                    <div className='flex items-center gap-2 relative'>


                                        <div className="tooltip tooltip-bottom hidden md:block" data-tip={`Welcome... ${user?.displayName}`}>
                                            <Link to=""> <img src={user?.photoURL} className='h-12 w-12 rounded-full object-cover object-top' alt="" /></Link>
                                        </div>


                                        <button onClick={handleLogOut} className="inline-flex items-center bgc-primary border-0 py-2 px-6 md:ml-4 focus:outline-none hover:bg-orange-400 rounded text-xl text-white mt-4 md:mt-0">Logout
                                        </button>
                                    </div>

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