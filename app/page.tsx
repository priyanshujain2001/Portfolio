'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import CaseStudies from '@/components/CaseStudies'
// import Testimonials from '@/components/Testimonials'
// import Services from '@/components/Services'
import LinkedInRedirect from '@/components/LinkedInRedirect'
import Skills from '@/components/Skills'
import CalendarBooking from '@/components/CalendarBooking'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CaseStudies />
      {/* <Testimonials /> */}
      {/* <Services /> */}
      <LinkedInRedirect />
      <Skills />
      <CalendarBooking />
      <Contact />
      <Footer />
    </main>
  )
}
