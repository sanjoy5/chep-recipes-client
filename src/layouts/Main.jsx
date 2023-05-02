import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
            <Toaster />
        </>
    )
}

export default Main