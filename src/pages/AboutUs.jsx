import React from 'react';

import AboutHero from '../Components/AboutHero';
import Partners from '../Components/Partners';
import AboutUs from '../Components/AboutUs';
import CorePrinciples from '../Components/CorePrinciples';
import Stats from '../Components/Stats';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonial';
import Team from '../Components/Team';


const AboutUsPage = () => {
  return (
    <div className="font-sans">
     
      <AboutHero />
      <Partners />
      <AboutUs />
      <CorePrinciples />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      
    </div>
  );
};

export default AboutUsPage;
