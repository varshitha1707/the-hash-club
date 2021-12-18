import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './Landing.css'
import Footer from './components/Footer'
import About from './components/About'
import People from './components/People'

function Landing() {
    return (
        <>
        <div className='App'>
            <NavBar/>
            <Hero/>
            <About/>
            <People/>
            <Footer/>
        </div>
        </>
    )
}

export default Landing
