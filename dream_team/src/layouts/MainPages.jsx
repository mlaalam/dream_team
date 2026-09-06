import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'


function MainPages() {
  return (
    <div>
      <main className="min-h-screen">
        <section id="home" className="min-h-screen scroll-mt-24">
          <Home />
        </section>
        <section id="services" className="min-h-screen scroll-mt-24">
          <Services />
        </section>
        <section id="about" className="min-h-screen scroll-mt-24">
          <AboutUs />
        </section>
        <section id="contact" className="min-h-screen scroll-mt-24  mx-5 md:mx-65">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default MainPages