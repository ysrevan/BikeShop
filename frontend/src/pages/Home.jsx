import React from 'react'
import Hero from '../components/hero/Hero'
import Threecardhome from '../components/threecardhome/Threecardhome'
import Ride from '../components/ride/Ride'
import Twopicturehome from '../components/twopicturehome/Twopicturehome'
import Fivepicturehome from '../components/fivepicturehome/Fivepicturehome'

function Home() {
  return (
    <>
      <Hero/>
      <Threecardhome/>
      <Ride/>
      <Twopicturehome/>
      <Fivepicturehome/>
    </>
  )
}

export default Home