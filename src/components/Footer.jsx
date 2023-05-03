import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // <footer>
        //     <div className="bg-gray-100">
        //         <div className="w-full md:w-10/12 px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">
        //             <Link to='/' className="flex title-font font-medium items-center tefullxt-gray-900 mb-4 md:mb-0">
        //                 <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" width={180} alt="" />
        //             </Link>
        //             <p className="text-lg text-gray-500 mt-4 sm:mt-0">&copy; 2023 Chef Recipe | Sanjoy</p>

        //         </div>
        //     </div>
        // </footer>

        <footer className="bg-gray-900 text-white mt-8 md:mt-24">

            <div className="w-100 md:w-10/12 pt-20 pb-14 px-3 mx-auto">

                <div className="flex justify-between flex-col md:flex-row pb-12 md:pb-20">
                    <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" className="w-40 md:w-48 h-full mb-5 md:mb-0 cursor-pointer bg-white rounded-md" alt="" />
                    <div className="flex items-center flex-wrap gap-5 md:gap-10">
                        <p className="text-xl">Ready to get strated?</p>
                        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Get Started</button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mb-5 lg:mb-0">
                        <h3 className="text-xl font-medium pb-6">Quick Links</h3>
                        <ul>
                            <li className="mb-4"><Link to="/" className="">Home</Link></li>
                            <li className="mb-4"><Link to="/services" className="">Services</Link></li>
                            <li className="mb-4"><Link to="/chefs" className="">Chefs</Link></li>
                            <li className="mb-4"><Link to="/blogs" className="">Blogs</Link></li>
                        </ul>

                    </div>
                    <div className="">
                        <h3 className="text-xl font-medium pb-6">Our Services</h3>
                        <ul>
                            <li className="mb-4"><Link to="" className="">Real Test</Link></li>
                            <li className="mb-4"><Link to="" className="">Best Food</Link></li>
                            <li className="mb-4"><Link to="" className="">Best Chefs</Link></li>
                            <li className="mb-4"><Link to="" className="">Quick Delivery</Link></li>

                        </ul>

                    </div>
                    <div className="">
                        <h3 className="text-xl font-medium pb-6">Help</h3>
                        <ul>
                            <li className="mb-4"><Link to="" className="">FAQs</Link></li>
                            <li className="mb-4"><Link to="" className="">Contact Us</Link></li>
                        </ul>

                    </div>
                    <div className="">
                        <h3 className="text-xl md:text-3xl  font-medium pb-7">Subscribe to our newsletter</h3>

                        <div className="flex items-center gap-1 mb-10">

                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">

                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe</button>
                        </div>

                        <div className="space-x-6">
                            <i className="fab fa-facebook-f cursor-pointer text-2xl"></i>
                            <i className="fab fa-twitter cursor-pointer text-2xl"></i>
                            <i className="fab fa-instagram cursor-pointer text-2xl"></i>
                        </div>

                    </div>

                </div>

                <div className="text-center text-gray-200 mt-10 md:mt-14">&copy; 2023 - By Sanjoy Sarker - All rights reserved.
                </div>

            </div>

        </footer>
    )
}

export default Footer