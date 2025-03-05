import React from "react";
import Maska from "../assets/Maska.png"; // Replace with your actual image path
import leafImage from "../assets/leaf.png"; // The path to your uploaded leaf image

const CoreValuesSection = () => {
  return (
    <section className="bg-[#ffffff] w-full py-16 px-6 pb-0">
      <div className="relative max-w-[1600px] mx-auto bg-white text-[#222] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
        
        {/* Left Image with Slanted Cut */}
        <div className="relative pentagon-top-right md:max-w-[608px] md:h-[855px] mx-auto mb-8 md:mb-0 md:ml-[-20px]">
          <img
            src={Maska}
            alt="High Precision Equipment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-6 md:p-10">
          <h2 className="text-[32px] md:text-[52px] font-bold leading-tight mb-8 text-center max-w-[675px] mx-auto">
            The core value that derives from everything we do
          </h2>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value Item 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#633A95] text-white p-4 rounded-full text-3xl mb-3">🔧</div>
              <p className="text-[22px] md:text-[28px] font-semibold max-w-[342px]">High-Precision Equipment</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-[341px]">
                Our facilities are equipped with state-of-the-art CNC machines and robotic arms that ensure precision.
              </p>
            </div>

            {/* Value Item 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#633A95] text-white p-4 rounded-full text-3xl mb-3">🔗</div>
              <p className="text-[22px] md:text-[28px] font-semibold max-w-[342px]">Custom Integration Capabilities</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-[341px]">
                We provide customized integration solutions for your production lines.
              </p>
            </div>

            {/* Value Item 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#633A95] text-white p-4 rounded-full mb-3">
                <img src={leafImage} alt="Eco-friendly" className="w-8 h-8" />
              </div>
              <p className="text-[22px] md:text-[28px] font-semibold max-w-[342px]">Eco-Friendly Processes</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-[341px]">
                Commitment to sustainability through reduced energy consumption and minimal waste.
              </p>
            </div>

            {/* Value Item 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#633A95] text-white p-4 rounded-full text-3xl mb-3">
              <img src={chainImage} alt="Custom Integration" className="w-8 h-8">
              </div>
              <p className="text-[22px] md:text-[28px] font-semibold max-w-[342px]">Real-Time Quality Monitoring</p>
              <p className="text-[14px] md:text-[16px] mt-2 max-w-[341px]">
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
