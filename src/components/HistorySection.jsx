/*import React, { useState } from "react";

const HistorySection = () => {
  const [activeTab, setActiveTab] = useState(null); // Set default active tab to null

  const contents = {
    Vision: "We aspire to redefine industry standards by integrating cutting-edge technology with a human-centered approach, fostering innovation and inclusivity in all we do.",
    Mission: "Empowering communities and businesses by delivering innovative, sustainable, and scalable solutions that drive progress and create lasting impact.",
    Goal: "To consistently push the boundaries of possibility, achieving sustainable success while upholding our core values of integrity, excellence, and innovation.",
  };

  const handleToggle = (tab) => {
    setActiveTab(activeTab === tab ? null : tab); // Toggle active tab visibility
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center font-[Chakra Petch]">
      {/* Title Section */
      /*<div className="w-full bg-white p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Stepping through our history of success
        </h1>
      </div>

      {/* Navigation Text with Underline Effect }
      <div className="relative flex space-x-8 text-lg font-semibold mb-6 border-b-2 border-gray-300 w-1/2 justify-center">
        {Object.keys(contents).map((tab) => (
          <div
            key={tab}
            onClick={() => handleToggle(tab)} // Toggle active tab on click
            className={`cursor-pointer pb-2 transition-colors duration-300 ${
              activeTab === tab ? "text-purple-600" : "text-gray-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content Box with Slide Down Effect }
      <div
        className={`relative w-full md:w-2/3 p-8 bg-purple-600 text-white pentagon-bottom-right rounded-lg transition-all duration-500 ease-in-out ${
          activeTab ? "max-h-screen" : "max-h-0" // Show the content when activeTab exists
        }`}
        style={{ overflow: "hidden" }}
      >
        <p className="text-lg text-center">{activeTab ? contents[activeTab] : ""}</p>
      </div>
    </div>
  );
};

export default HistorySection;*/
