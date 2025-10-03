import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './pages/beranda';
import AboutMe from './pages/about';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import ScrollButton from './components/scrollButton/ScrollButton';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Skills />
            <Contact />
          </>
          }>
        </Route>
      </Routes>
      <Footer></Footer>
      <ScrollButton />
    </Router>
  );

}

export default App
