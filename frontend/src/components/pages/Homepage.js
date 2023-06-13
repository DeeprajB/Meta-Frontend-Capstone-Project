import React from 'react'

import HeroSection from '../sections/heroSection'
import SpecialSection from '../sections/specialSection'
import TestimonialSection from '../sections/testimonialSection'
import AboutSection from '../sections/aboutSection'

function Homepage() {
  return (
    <>
    <HeroSection />
    <main>
        <SpecialSection />
        <TestimonialSection />
        <AboutSection />
    </main>
    </>
  )
}

export default Homepage