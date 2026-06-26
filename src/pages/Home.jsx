import React from 'react'
import Hero from '../components/Hero.jsx'
import StatsSection from '../components/StatsSection.jsx'
import WhatWeDo from '../components/WhatWeDo.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ScrollVelocity from '../components/ScrollVelocity.jsx'
import Contact from './Contact.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx'

function Home() {
  return (
    <section>
        <Hero />
        <WhatWeDo />
        <StatsSection/>
        <Testimonials />
        <Contact/>
        <div className='py-10 [mask-image:linear-gradient(to_left,transparent,black_25%,black_75%,transparent)]'>
            <ScrollVelocity
                texts={['#PIXEL PERFECT STUDIO #DILSHAD PHOTOGRAPHY']} 
                velocity={60} 
                className="custom-scroll-text stroke text-amber-50 dark:text-[#ffffff72] font-bold"
            />
        </div>
        
    </section>
  )
}

export default Home
