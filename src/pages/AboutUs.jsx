import React from 'react';

import AboutHero from '../components/AboutHero';
import Partners from '../Components/Partners';
import About from '../Components/About';
import CorePrinciples from '../components/CorePrinciples';
import Stats from '../components/Stats';
import Services from '../Components/Services';
import Testimonials from '../components/Testimonial';
import Team from '../components/Team';


const AboutUsPage = () => {
  return (
    <div className="font-sans">
     
      <AboutHero />
      <Partners />
      <About />
      <CorePrinciples />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      
    </div>
  );
};

export default AboutUsPage;
