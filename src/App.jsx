import { Route, Routes } from "react-router-dom";
import React from 'react';
import './index.css'

// Pages
import Home from "../src/pages/Home";
import ProvidersPage from "../src/pages/ProvidersPage";
import Services from "../src/pages/Services";
import AboutUs from "../src/pages/AboutUs";
import Contact from "../src/pages/ContactUs";
import Projects from "../src/pages/Projects";

import Gallery from '../src/pages/Gallery';

// Layout
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
