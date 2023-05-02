import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div class="container px-5 py-20 mx-auto">
                <form class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 border">
                    <h2 class="text-gray-900 text-2xl mb-3 font-medium title-font text-center">Register Here</h2>

                    <div class="relative mb-4">
                        <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="photo" class="leading-7 text-sm text-gray-600">Photo URL</label>
                        <input type="text" id="photo" name="photo" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label htmlFor="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button class="mt-2 text-white bgc-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Registration</button>
                    <p class="text-base text-gray-500 mt-3 text-center">Already Have An Account ? <Link to="/login" className="text-red-500 px-0">Login</Link></p>
                </form>


                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg px-9 flex flex-col md:mx-auto w-full mt-10">
                    <div className="">
                        <div className="flex text-xl text-white font-semibold items-center gap-10 bg-[#4081EC] border-2 rounded border-[#4081EC] mb-4">
                            <img className='rounded' src="https://i.ibb.co/Fqf7btx/goole1.webp" height={50} width={50} alt="" /> <p className="">Login with Google</p>
                        </div>
                        <div className="flex text-xl text-white font-semibold items-center gap-10 bg-[#1B1F23] border-2 rounded border-[#1B1F23]">
                            <img className='rounded' src="https://i.ibb.co/tDPynx6/Git-Hub-Mark.png" height={50} width={50} alt="" /> <p className="">Login with Github</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register