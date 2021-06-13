import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContaniner'
const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
             <Banner title=" Our Rooms">
                    <Link to="/" className="btn-primary"> Back to Home</Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}

export default Rooms
