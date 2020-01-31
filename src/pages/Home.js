import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <Hero>
      <Banner title='this titlte' subtitle='tes sub title'>
        <Link to='/rooms' className='btn-primary'>
         Our rooms
        </Link>
      </Banner>
    </Hero>
  )
}

export default Home;
