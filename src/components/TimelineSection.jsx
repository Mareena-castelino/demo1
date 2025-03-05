import React from "react";

const TimelineSection = () => {
  return (
    <section className="bg-[#EDE6FA] py-10 relative">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Stepping through our history of success
      </h2>

      {/* Navbar Section */}
      <div className="bg-[#A433FF] mt-10 py-6 flex flex-col items-center">
        <div className="flex space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded flex items-center space-x-2">
            <span>👁️</span>
            <span>OUR VISION</span>
          </button>
          <button className="border-2 border-white text-white px-6 py-2 rounded flex items-center space-x-2">
            <span>🎯</span>
            <span>OUR MISSION</span>
          </button>
          <button className="bg-black text-white px-6 py-2 rounded flex items-center space-x-2">
            <span>🏁</span>
            <span>OUR GOAL</span>
          </button>
        </div>

        {/* Mission Content */}
        <p className="text-center text-white mt-4 max-w-2xl">
          Our mission is to create innovative solutions that drive success for
          our partners and enhance the well-being of the communities we serve.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex justify-center items-center mt-10 relative">
        {/* First Card */}
        <div className="absolute top-0 right-20 bg-white p-6 shadow-lg w-72 rounded-lg">
          <img
            src="your-image-url.jpg"
            alt="Measurement tools"
            className="w-full h-32 object-cover"
          />
          <p className="mt-4 text-gray-800 font-semibold">Measurement tools</p>
        </div>

        {/* Second Card */}
        <div className="absolute top-32 right-10 bg-white p-6 shadow-lg w-80 rounded-lg">
          <img
            src="your-image-url.jpg"
            alt="Measurement tools"
            className="w-full h-40 object-cover"
          />
          <p className="mt-4 text-gray-800 font-semibold">Measurement tools</p>
          <p className="text-[#A433FF] font-bold mt-2">Since</p>
          <p className="text-[#A433FF] text-3xl font-extrabold">2002</p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
