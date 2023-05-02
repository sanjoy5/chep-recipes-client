import React from 'react'

const ErrorPage = () => {
    return (
        <div className='mx-5 mt-16'>
            <div className="flex items-center flex-col justify-center">
                <img className='w-8/12 md:w-3/12' src="https://i.ibb.co/vmMvRfm/pagenotfound.png" alt="" />
                <h2 className="text-4xl lg:text-6xl font-bold text-center text-red-500 mb-8">Opps! Page Not Found</h2>
            </div>
        </div>
    )
}

export default ErrorPage