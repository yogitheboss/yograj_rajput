import Footer from './components/Footer.js'
import HeroSection from './components/HeroSection.js'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import {useState,useEffect} from 'react'
import About from './components/About.js'
import React from 'react'
import SideMenu from './components/SideMenu.js'
import Wrapper from './components/Wrapper.js'
import Skills from './components/Skills.js'
function App() {

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
      {/* <Projects /> */}
      <Skills />
      <Footer />
      
    </div>
    </>
    
    
  )
}

export default App