import React from 'react'
import { useAuthContext } from '../Provider/AuthProvider'
import { Link } from 'react-router-dom'

const Success = () => {
    const { user } = useAuthContext()
    return (
        <div className='px-4 h-screen w-full flex justify-center items-center'>
            {
                user && <div className="md:w-1/3 border rounded p-10 pb-14  mx-auto">
                    <div className="w-full">
                        <img src='https://i.ibb.co/gJhY3Jh/icegif-2707.gif' className='w-[200px] h-[200px]  mx-auto object-contain' alt="" />
                    </div>
                    <h2 className="text-3xl font-medium mb-5 text-center">User was Created Successfully</h2>
                    <div className="text-center pt-3">
                        <Link to='/' className="text-lg font-semibold py-2 px-5 rounded bg-red-500 text-white mt-3">Go to Home</Link>
                    </div>

                </div>
            }

        </div>
    )
}

export default Success