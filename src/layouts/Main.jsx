import React from 'react'
import Header from '../components/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading';

const Main = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header></Header>

            <div className="">{navigation.state === 'loading' && <Loading />}</div>

            <Outlet></Outlet>
            <Footer />
            <Toaster />
        </>
    )
}

export default Main