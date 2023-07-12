import React from 'react'
import Slider from '../components/Slider'
import Feature from '../components/Feature'
import Category from '../components/Category'
import Testimonial from '../components/Testimonial'
import Nav from '../components/Nav'
import NavBar from '../components/Navbar'

function Home() {
    return (
        <>
            <Slider />
            <Feature />
            <Category />
            <Testimonial />
        </>
    )
}

export default Home