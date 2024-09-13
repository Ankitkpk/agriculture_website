import React from 'react'
import Hero from '../../components/Hero'
import Latest from '../../components/Latest'
import Offers from '../../components/Offers'
import Quality from '../../components/Quality'
import Testimonials from '../../components/Testimonials'
import Blog from '../../components/Blog'

const Home = () => {
  return (
    <div>
         <Hero/>
      <Latest/>
      <Offers/>
      <Quality/>
      <Testimonials/>
      <Blog/>
    </div>
  )
}

export default Home