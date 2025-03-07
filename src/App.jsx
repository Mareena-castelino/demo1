import React from 'react';
import ExpertiseSection from './components/ExpertiseSection';
import ScrollingLogos from './components/ScrollingLogos';

import AboutUs from "./Pages/AboutUs"
const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <AboutUs/>
      <ScrollingLogos/>
     
      <ExpertiseSection/>
    

    </div>
  );
};

export default App;
