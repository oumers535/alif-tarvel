import React, { useEffect } from 'react'
import Destination from './components/Destination';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
  AOS.init({

 
    duration: 700,
    easing: "ease-out-cubic",

  });
}, []);
  return (
          <>
            <Navbar />
            <main>
              <Hero />
              <Destination />
              <About />
              <Contact />
            </main>
            <Footer />
          </>
        );
      }
export default App