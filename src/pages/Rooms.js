import React from 'react'
import Hero from '../Components/hero'
import Banner from '../Components/banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../Components/RoomsContainer'

const rooms = () => {
    return (
        <>
        <Hero hero='roomsHero'>
            <Banner title='Our Rooms'>
                <Link to='/' className='btn-primary'>Back to home</Link>
            </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
        </>
    )
}

export default rooms
