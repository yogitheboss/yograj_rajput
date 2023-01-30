import {  useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Skills from "./components/Skills";
import { FaAngleDoubleUp } from "react-icons/fa";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  // const About1 = useRef(null);
  // const contact = useRef(null);
  // const About2 = useRef(null);

  // const scrolltotop = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [visible, togglevisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        togglevisible(true);
      } else {
        togglevisible(false);
      }
    });
  }, []);
  return (
    <div className="Home" >
      <div>
        {visible && (
          <FaAngleDoubleUp
            onClick={scrolltop}
            style={{
              fontSize: "2rem",
              position: "fixed",
              bottom: "30px",
              right: "30px",
              border: "4px solid black",
            }}
          />
        )}
      </div>
      <Navbar />
      <Herosection id="home"/>
      <section id="skill">
      <Skills ></Skills>
      </section>
      <section id="projects">
      <Projects ></Projects>
      </section>
      <section id="contact">
      <Contact ></Contact>
      </section>
    </div>
  );
}

export default App;
