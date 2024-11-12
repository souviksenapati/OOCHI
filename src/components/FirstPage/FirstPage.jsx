import React from 'react'
import Navbar from '../FirstPage/Navbar'
import LandingPage from '../FirstPage/LandingPage'
import Marque from '../FirstPage/Marque'
import About from '../FirstPage/About'
import Eyes from '../Eyes'
import Footer from '../FirstPage/Footer'


function FirstPage() {
    return (

        <div className='w-full min-h-screen text-black'>
            <LandingPage />
            <Marque  text="We are ochi"/>
            <About />
            <Eyes image='https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg' />
            <Footer />
        </div>
    )
}

export default FirstPage