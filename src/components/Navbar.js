import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Logo from './Logo'

function Navbar({ setMenuOpen, menuOpen, scrolled }) {

  const navVariant = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        when: "beforeChildren"
      }
    }
  }

  return (
    <motion.nav variants={navVariant} initial='hidden' animate='visible' className={scrolled ? "scrolled opacity-90 text-white p-5 sticky top-0 z-10  " : "text-white p-5 sticky top-0 z-10  "} >
      <div className="flex justify-around">
        <div>
          <a href="/" className="font-bold text-2xl">
            <Logo height='12vh'/>
          </a>
        </div>
        <motion.div className="hidden md:flex items-center  space-x-4" >
          <Link offset={-40} to="about" spy={true} smooth={true} duration={800} className="card bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:text-glow-lg cursor-pointer">About</Link>
          <Link offset={-40} to='work' spy={true} smooth={true} duration={800} href="/" className="card bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:text-glow-lg cursor-pointer">Work</Link>
          <Link offset={-40} to="skills" spy={true} smooth={true} duration={800} className="card bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:text-glow-lg  cursor-pointer">Skills</Link>
        </motion.div>
        <div className="md:hidden flex items-center">

          <button className="outline-none bg-sky-900 rounded-full p-2 mobile-menu-button" onClick={() => {
            setMenuOpen(!menuOpen)
            console.log(menuOpen)
          }
          } >
            <svg className=" w-6 h-6 text-blue-200 hover-scale-125 hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar