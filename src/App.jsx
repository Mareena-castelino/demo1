import React from 'react';

import ScrollingLogos from './components/ScrollingLogos';
import FacesBehindIndustry from './components/FacesBehindIndustry';
import ExpertiseSection from './components/ExpertiseSection';
import CoreValueSection from './components/CoreValueSection';
import HistorySection from './components/HistorySection';
import SuccessHistory from './components/SuccessHistory';
const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <SuccessHistory/>
      <CoreValueSection/>
      <ScrollingLogos/>
      <FacesBehindIndustry/>
      <ExpertiseSection/>

    </div>
  );
};

export default App;
