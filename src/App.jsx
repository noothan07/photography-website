import './App.css'
import React from 'react'
import SplashScreen from './components/SplashScreen.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import CursorEffect from './components/CursorEffect.jsx'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
   <>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <section>
          <CursorEffect />
          <ScrollToTop />
          <FloatingWhatsApp />
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
        </section>
      )}
    </>
  )
}

export default App
