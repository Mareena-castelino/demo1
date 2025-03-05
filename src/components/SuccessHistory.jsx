import { useState } from "react";
import imagea from "../assets/imagea.png"; // Replace with actual image path
import PropTypes from 'prop-types';

const SuccessHistory = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const [text, setText] = useState("Our Vision is to embody our values and purpose in everything we do. We are dedicated to serving our customers, partners, and communities with integrity, innovation, and excellence. Our commitment to quality and sustainability drives us to continuously improve and exceed expectations.");

  const ourMission = () => {
    setActiveTab("Mission");
    setText("Our mission is to embody our values and purpose in everything we do. We are dedicated to serving our customers, partners, and communities with integrity, innovation, and excellence. Our commitment to quality and sustainability drives us to continuously improve and exceed expectations.");
  };

  const ourVision = () => {
    setActiveTab("Vision");
    setText("Our Vision is to embody our values and purpose in everything we do. We are dedicated to serving our customers, partners, and communities with integrity, innovation, and excellence. Our commitment to quality and sustainability drives us to continuously improve and exceed expectations.");
  };

  const ourGoal = () => {
    setActiveTab("Our Goal");
    setText("Our goal is to embody our values and purpose in everything we do. We are dedicated to serving our customers, partners, and communities with integrity, innovation, and excellence. Our commitment to quality and sustainability drives us to continuously improve and exceed expectations.");
  };

  return (
    <section className="bg-[#EDE6FA] flex justify-center py-16 px-6">
      <div className="relative flex flex-col w-full max-w-full bg-white rounded-lg overflow-hidden shadow-lg pentagon-bottom-left">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center px-12 py-12">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#333] leading-tight">
              Stepping through our <br /> history of success
            </h2>
          </div>

          {/* Right Image with Slanted Cut */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-full">
              <img
                src={imagea} // Replace with actual image
                alt="Industrial Measurement"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white px-6 py-3 rounded-md shadow-md">
                <p className="text-lg text-[#7A6E92]">Since</p>
                <p className="text-3xl font-bold text-[#7A6E92]">2002</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Vision/Mission/Goal */}
        <div className="bg-[#9b83b5] text-white p-10 relative ">
          <div className="flex space-x-8">
            <button 
              onClick={ourVision}
              className={`text-lg ${activeTab === 'Vision' ? 'font-semibold border-b-2' : 'opacity-75'}`}
            >
              ◎ OUR VISION
            </button>
            <button 
              onClick={ourMission}
              className={`text-lg ${activeTab === 'Mission' ? 'font-semibold border-b-2' : 'opacity-75'}`}
            >
              ◎ OUR MISSION
            </button>
            <button 
              onClick={ourGoal}
              className={`text-lg ${activeTab === 'Our Goal' ? 'font-semibold border-b-2' : 'opacity-75'}`}
            >
              ⚡ OUR GOAL
            </button>
          </div>
          <p className="mt-6 text-lg leading-relaxed">
            {text}
          </p>

          {/* Slanted Bottom Shape */}
          <div className="absolute bottom-0 left-0  bg-[#9b83b5] "></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHistory;
