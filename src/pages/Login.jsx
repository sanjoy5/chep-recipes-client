import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { signInByEmailPassword, signInWithGoogle, signInWithGithub } = useAuthContext()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    // Handle SignUp Using Email password

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email, password) {
            signInByEmailPassword(email, password)
                .then(result => {
                    const loggedUser = result.user
                    console.log(loggedUser);
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    setError(error.message)
                })
        } else {
            setError('You cannot submit empty email and password fields')
            return
        }

    }

    // Handle SignUp Using Google Loging

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setError("")
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // Handle SignUp Using Github Loging

    const handleGithubSignin = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError("")
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <>
            <div className="container px-5 py-10 md:py-20 mx-auto">
                <form onSubmit={handleLogin} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 border">
                    <h2 className="text-gray-900 text-2xl mb-3 font-medium title-font text-center">Login Here</h2>

                    {
                        error && <p className="text-base text-red-500 mb-3"> <strong>Error: </strong> {error}</p>
                    }

                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button type='submit' className="mt-2 text-white bgc-primary border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Login</button>
                    <p className="text-base text-gray-500 mt-3 text-center">Dont’t Have An Account ? <Link to="/register" className="text-red-500 px-0">Register</Link></p>
                </form>


                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg px-9 flex flex-col md:mx-auto w-full mt-10">
                    <div className="">
                        <div onClick={handleGoogleSignin} className=" cursor-pointer flex text-xl text-white font-semibold items-center gap-10 bg-[#4081EC] border-2 rounded border-[#4081EC] mb-4">
                            <img className='rounded' src="https://i.ibb.co/Fqf7btx/goole1.webp" height={50} width={50} alt="" /> <p className="">Login with Google</p>
                        </div>

                        <div onClick={handleGithubSignin} className="cursor-pointer flex text-xl text-white font-semibold items-center gap-10 bg-[#1B1F23] border-2 rounded border-[#1B1F23]">
                            <img className='rounded' src="https://i.ibb.co/tDPynx6/Git-Hub-Mark.png" height={50} width={50} alt="" /> <p className="">Login with Github</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login