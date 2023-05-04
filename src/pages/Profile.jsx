import React from 'react'
import { useAuthContext } from '../Provider/AuthProvider'

const Profile = () => {

    const { user } = useAuthContext()

    return (

        <>
            {
                user && <div className="w-100 md:w-1/3 border rounded p-10 mx-auto my-16">
                    <div className="w-full">
                        <img src={user?.photoURL} className='w-24 h-24 rounded-full mx-auto object-cover object-top' alt="" />
                    </div>
                    <h2 className="text-3xl font-medium my-5 text-center">{user?.displayName}</h2>
                    <p className="text-xl font-semibold text-center">{user?.email}</p>
                    <p className="text-base font-semibold text-center my-5">{user?.emailVerified ?
                        <><span className="text-green-500">Verified</span></>
                        : <><span className="text-red-500">Not Verified</span></>
                    }</p>
                </div>
            }

        </>
    )
}

export default Profile