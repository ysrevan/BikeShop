import React from 'react'
import Ride from '../components/ride/Ride'
import Aboutpage from '../components/pageheader/Aboutpage'
import Aboutexperience from '../components/aboutexprience/Aboutexperience'
import Abouthumble from '../components/abouthumble/Abouthumble'

function About() {
  return (
    <>
    <Aboutpage/>
    <Aboutexperience/>
     <Ride/>
     <Abouthumble/>
    </>
  )
}

export default About