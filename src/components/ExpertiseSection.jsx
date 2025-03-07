import React from "react";
import imagea from "../assets/imagea.png"; // Replace with the correct path

const ExpertiseSection = () => {
  return (
    <section className="bg-[#ffffff] flex justify-center py-12 px-4 md:py-16 md:px-6">
      <div
        className="relative flex flex-col md:flex-row w-full max-w-6xl bg-[#9b83b5] text-white overflow-hidden shadow-lg pentagon-bottom-left"
        style={{
          maxWidth: "1200px",
          height: "auto",
        }}
      >
        {/* Left Content with Slanted Cut */}
        <div className="relative w-full md:w-[55%] p-6 md:p-14 flex flex-col space-y-6 md:space-y-7">
          <h2 className="text-3xl md:text-[52px] font-semibold leading-tight mb-4 md:mb-8 font-chakra-petch text-center md:text-left">
            Our expertise and experience
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <p className="text-4xl md:text-5xl font-bold font-chakra-petch">92%</p>
              <p className="text-[14px] md:text-[16px] font-poppins text-gray-300">
                Increase In Production Efficiency
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-chakra-petch">32</p>
              <p className="text-[14px] md:text-[16px] font-poppins text-gray-300">
                In-House Industrial Experts
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-chakra-petch">350+</p>
              <p className="text-[14px] md:text-[16px] font-poppins text-gray-300">
                Delivered Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[45%] relative">
          <img
            src={imagea}
            alt="Industrial Expertise"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
