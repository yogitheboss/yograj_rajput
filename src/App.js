import Footer from './components/Footer.js'
import HeroSection from './components/HeroSection.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import Feedback from './components/Feedback.js'
import Contacts from './components/Contacts.js'
import {useState,useEffect} from 'react'
import About from './components/About.js'
import { scroller } from 'react-scroll'
import React from 'react'
import SideMenu from './components/SideMenu.js'
import Wrapper from './components/Wrapper.js'
function App() {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="App">
      <Navbar scrolled={scrolled} menuOpen={menuOpen}setMenuOpen={setMenuOpen}/>
      {menuOpen && <Wrapper setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>}
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <HeroSection /> 
      <About/>
      <Projects />
      <Feedback />
      <Contacts />
      <Footer />
    </div>
    </>
    
    
  )
}

export default App