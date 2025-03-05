import React from "react";
import imagea from "../assets/imagea.png"; // Replace with the correct path

const ExpertiseSection = () => {
  return (
    <section className="bg-[#EDE6FA] flex justify-center py-16 px-6">
      <div 
      className="relative flex flex-col md:flex-row w-[85%] max-w-6xl bg-[#9b83b5] text-white overflow-hidden shadow-lg pentagon-bottom-left"
      style={{
        width: "1200px",
        height: "439px",
      }}
      >
        
        {/* Left Content with Slanted Cut */}
        <div className="relative w-full md:w-[55%] p-6 md:p-14 flex flex-col space-y-7">
        <h2 className="text-[52px] md:text-4xl font-semibold leading-tight mb-6 md:mb-8 font-chakra-petch">
          Our expertise and experience
        </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="text-[40px] md:text-5xl font-bold font-chakra-petch">92%</p>
              <p className="text-[16px] font-poppins" style={{ color: "rgba(29, 38, 53, 0.6)" }}>Increase In Production Efficiency</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-chakra-petch">32</p>
                 <p className="text-[16px] font-poppins" style={{ color: "rgba(29, 38, 53, 0.6)" }}>"In-House Industrial Experts</p>
            </div>
            <div>
              <p className="tex[40px]xl md:text-5xl font-bold">350+</p>             
              <p className="text-[16px] font-poppins" style={{ color: "rgba(29, 38, 53, 0.6)" }}>"Delivered Solutions</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[45%] relative">
          <img
            src={imagea}
            alt="Industrial Expertise"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
