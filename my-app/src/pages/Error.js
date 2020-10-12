import React from 'react'
import Hero from '../Components/hero'
import Banner from '../Components/banner'
import {Link} from 'react-router-dom'


const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle='Page Not Found'>
                <Link to='/' className='btn-primary'>Back to Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error