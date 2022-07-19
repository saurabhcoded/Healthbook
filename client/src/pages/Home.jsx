import React from 'react'
import ContactHome from '../components/Home/ContactHome'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import Information from '../components/Home/Information'
import RecordHome from '../components/Home/RecordHome'
import Services from '../components/Home/Services'
import Testimonial from '../components/Home/Testimonial'

const Home = () => {
  return (
    <section id='Home'>
      <Hero/>
      <Information/>
      <Features/>
      <Services/>
      <RecordHome/>
      <Testimonial/>
      <ContactHome/>
    </section>
  )
}

export default Home