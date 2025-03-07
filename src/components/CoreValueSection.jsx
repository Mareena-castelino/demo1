import React from "react";
import Maska from "../assets/Maska.png"; // Replace with your actual image path
import leafImage from "../assets/leaf.png"; // The path to your uploaded leaf image
import high from "../assets/high.png"; // The path to your uploaded leaf image
import commit from "../assets/commit.png"; // The path to your uploaded leaf image
import real from "../assets/real.png"; // The path to your uploaded leaf image

const CoreValuesSection = () => {
  return (
    <section className="bg-[#ffffff] w-full">
       <div className="relative w-full bg-white text-[#222] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 md:pt-8 px-4 md:px-6 lg:px-0"> 
        {/* Left Image with Slanted Cut - Centers in Mobile */}
        <div className="relative pentagon-top-right max-w-full md:max-w-[608px] md:h-[855px] mx-auto md:mx-0 mb-8 md:mb-0">
          <img
            src={Maska}
            alt="High Precision Equipment"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content - Shifted Left for Large Screens */}
        <div className="p-0 pb-5 md:p-6 lg:p-10 text-left md:ml-[-40px] lg:ml-[-80px]">
          <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-tight mb-6 md:mb-8 max-w-full md:max-w-[675px]">
            The core value that derives from everything we do
          </h2>

          {/* Core Values Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Value Item 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="bg-[#633A95] text-white p-3 md:p-4 rounded-full text-3xl mb-3">
                <img src={high} alt="Custom Integration" className="w-6 md:w-8 h-6 md:h-8" />
              </div>
              <p className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold max-w-full md:max-w-[342px]">High-Precision Equipment</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-full md:max-w-[320px]">
                Our facilities are equipped with state-of-the-art CNC machines and robotic arms that ensure precision.
              </p>
            </div>

            {/* Value Item 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="bg-[#633A95] text-white p-3 md:p-4 rounded-full text-3xl mb-3">
                <img src={commit} alt="Custom Integration" className="w-6 md:w-8 h-6 md:h-8" />
              </div>
              <p className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold max-w-full md:max-w-[342px]">Custom Integration Capabilities</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-full md:max-w-[341px]">
                We provide customized integration solutions for your production lines.
              </p>
            </div>

            {/* Value Item 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="bg-[#633A95] text-white p-3 md:p-4 rounded-full mb-3">
                <img src={leafImage} alt="Eco-friendly" className="w-6 md:w-8 h-6 md:h-8" />
              </div>
              <p className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold max-w-full md:max-w-[342px]">Eco-Friendly Processes</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-full md:max-w-[341px]">
                Commitment to sustainability through reduced energy consumption and minimal waste.
              </p>
            </div>

            {/* Value Item 4 */}
            <div className="flex flex-col items-start text-left">
              <div className="bg-[#633A95] text-white p-3 md:p-4 rounded-full text-3xl mb-3">
                <img src={real} alt="Custom Integration" className="w-6 md:w-8 h-6 md:h-8" />
              </div>
              <p className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold max-w-full md:max-w-[342px]">Real-Time Quality Monitoring</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-full md:max-w-[341px]">
                Utilizing the latest IoT and AI technology, we monitor production processes in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
