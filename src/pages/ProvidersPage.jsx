import React from 'react';

import ProvidersHero from '../Components/ProvidersHero';
import SearchResult from '../Components/SearchResult';
import LatestProjects from '../Components/LatestProjects';
import Partners from '../Components/Partners';


const ProvidersPage = () => {
  return (
    <div className="font-sans">
     
      <ProvidersHero />
      <Partners />
      <SearchResult />
      <LatestProjects />
     
    </div>
  );
};

export default ProvidersPage;