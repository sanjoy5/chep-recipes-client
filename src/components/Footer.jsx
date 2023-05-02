import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // <footer>
        //     <div className="bg-gray-100">
        //         <div className="w-full md:w-10/12 px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">
        //             <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //                 <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" width={180} alt="" />
        //             </Link>
        //             <p className="text-lg text-gray-500 mt-4 sm:mt-0">&copy; 2023 Chef Recipe | Sanjoy</p>

        //         </div>
        //     </div>
        // </footer>

        <footer class="bg-gray-900 text-white mt-8 md:mt-16">

            <div class="w-100 md:w-10/12 pt-20 pb-14 px-3 mx-auto">

                <div class="flex justify-between flex-col md:flex-row pb-12 md:pb-20">
                    <img src="https://i.ibb.co/YP2Nq3Q/Logo-Makr-7u04-SC.png" class="w-40 md:w-48 h-full mb-5 md:mb-0 cursor-pointer bg-white rounded-md" alt="" />
                    <div class="flex items-center flex-wrap gap-5 md:gap-10">
                        <p class="text-xl">Ready to get strated?</p>
                        <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Get Started</button>
                    </div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div class="mb-5 lg:mb-0">
                        <h3 class="text-xl font-medium pb-6">Quick Links</h3>
                        <ul>
                            <li class="mb-4"><a href="/" class="">Home</a></li>
                            <li class="mb-4"><a href="/services" class="">Services</a></li>
                            <li class="mb-4"><a href="/chefs" class="">Chefs</a></li>
                            <li class="mb-4"><a href="/blogs" class="">Blogs</a></li>
                        </ul>

                    </div>
                    <div class="">
                        <h3 class="text-xl font-medium pb-6">Our Services</h3>
                        <ul>
                            <li class="mb-4"><a href="" class="">Real Test</a></li>
                            <li class="mb-4"><a href="" class="">Best Food</a></li>
                            <li class="mb-4"><a href="" class="">Best Chefs</a></li>
                            <li class="mb-4"><a href="" class="">Quick Delivery</a></li>

                        </ul>

                    </div>
                    <div class="">
                        <h3 class="text-xl font-medium pb-6">Help</h3>
                        <ul>
                            <li class="mb-4"><a href="" class="">FAQs</a></li>
                            <li class="mb-4"><a href="" class="">Contact Us</a></li>
                        </ul>

                    </div>
                    <div class="">
                        <h3 class="text-xl md:text-3xl  font-medium pb-7">Subscribe to our newsletter</h3>

                        <div class="flex items-center gap-1 mb-10">

                            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">

                                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe</button>
                        </div>

                        <div class="space-x-6">
                            <i class="fab fa-facebook-f cursor-pointer text-2xl"></i>
                            <i class="fab fa-twitter cursor-pointer text-2xl"></i>
                            <i class="fab fa-instagram cursor-pointer text-2xl"></i>
                        </div>

                    </div>

                </div>

                <div class="text-center text-gray-200 mt-10 md:mt-14">&copy; 2023 - By Sanjoy Sarker - All rights reserved.
                </div>

            </div>

        </footer>
    )
}

export default Footer