import React from 'react'
import Hero from '../Components/hero'
import Banner from '../Components/banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRoom'

const home = () => {
    return (
        <>
        <Hero>
            <Banner title='luxurious Rooms' subtitle='deluxe Rooms Starting at $2.99'>
                <Link to='/rooms' className='btn-primary'>Our rooms</Link>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        
        </>
)
}


export default home
