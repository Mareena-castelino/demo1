import { useState } from "react";
import Maskr from "../assets/Maskr.png"; // Replace with actual image path
import PropTypes from 'prop-types';
import rocketIcon from "../assets/rocket.png";
import eyeIcon from "../assets/eye.png";
import targetIcon from "../assets/target.png";

const SuccessHistory = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const [text, setText] = useState("SRI aims to become a global leader in the steel industry, achieving a production output of 1,500 MT by 2030 while maintaining best-in-class quality standards. Our vision is to be recognized for excellence, reliability, and innovation, ensuring that our customers receive high-performance flanges, fittings, and machined components. SRI is committed to expanding its presence in the Middle East, Southeast Asia, American, and European markets, delivering superior solutions to industries worldwide.");

  const ourMission = () => {
    setActiveTab("Mission");
    setText("SRI manufactures high-quality alloy and non-alloy steel, ensuring precision, durability, and global compliance. We enhance production with advanced technology, skilled workforce, and innovation. Committed to integrity, trust, and transparency, we expand globally while prioritizing employee growth, timely delivery, competitive pricing, and exceptional customer service for lasting partnerships.");
  };

  const ourVision = () => {
    setActiveTab("Vision");
    setText("SRI aims to become a global leader in the steel industry, achieving a production output of 1,500 MT by 2030 while maintaining best-in-class quality standards. Our vision is to be recognized for excellence, reliability, and innovation, ensuring that our customers receive high-performance flanges, fittings, and machined components. SRI is committed to expanding its presence in the Middle East, Southeast Asia, American, and European markets, delivering superior solutions to industries worldwide.");
  };

  const ourGoal = () => {
    setActiveTab("Our Goal");
    setText("SRI aims for 1,500 MT production by 2030 while ensuring top quality. We expand globally, leveraging automation and digital solutions for efficiency. Achieving key certifications, we serve oil, gas, and industrial sectors. A dedicated R&D division drives innovation, enhancing customer satisfaction through swift service, optimized supply chains, and value-added solutions..");
  };

  return (
    <section className="bg-[#ffffff] flex justify-center py-10   relative overflow-hidden">
      <div className="relative flex flex-col w-full max-w-full bg-white rounded-lg overflow-hidden shadow-lg pentagon-bottom-left">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center px-6 sm:px-12 py-8 sm:py-12 relative text-center md:text-left">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] leading-tight" style={{fontFamily: 'Chakra Petch', 
          fontWeight: 600, 
          fontSize: '60px', 
          lineHeight: '100%', 
          letterSpacing: '0%' }}>
              Stepping through our <br /> history of success
            </h2>
          </div>
        </div>

        {/* Bottom Section - Vision/Mission/Goal */}
        <div className="bg-[#9b83b5] text-white p-6 sm:p-12 relative flex flex-col md:flex-row mt-8 sm:mt-12">
          {/* Left Content */}
          <div className="md:w-1/2 ml-12">
         <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        <button
           onClick={ourVision}
          className={`flex items-center text-base sm:text-lg ${activeTab === "Vision" ? "font-semibold border-b-2" : "opacity-75"}`}
          >
         <img src={targetIcon} alt="Vision Icon" className="w-6 h-6 mr-2" /> {/* Add right margin for spacing */}
            <span>OUR VISION</span>
        </button>
        <button
         onClick={ourMission}
          className={`flex items-center text-base sm:text-lg ${activeTab === "Mission" ? "font-semibold border-b-2" : "opacity-75"}`}
          >
         <img src={eyeIcon} alt="Mission Icon" className="w-6 h-6 mr-2" />
       <span>OUR MISSION</span>
        </button>
        <button
        onClick={ourGoal}
        className={`flex items-center text-base sm:text-lg ${activeTab === "Our Goal" ? "font-semibold border-b-2" : "opacity-75"}`}
        >
          <img src={rocketIcon} alt="Goal Icon" className="w-6 h-6 mr-2" />
           <span>OUR GOAL</span>
          </button>
        </div>

            {/* Text Box */}
            <div className="mt-6 text-[16px] sm:text-[16px] leading-tight h-auto sm:h-40 overflow-hidden">
              <p className="text-ellipsis line-clamp-6 ">
                {text}
              </p>
            </div>
          </div>

          {/* Right Image Positioned Partially Inside Purple Container */}
  
          <div className="absolute top-[-150px] sm:top-[-250px] right-0 w-[50%] sm:w-[35%] z-10 pentagon-top-left " 
          style={{ transform: "translateX(-10%)" }}>
            <img
              src={Maskr}
              alt="Industrial Measurement"
              className="w-full object-cover h-[250px] sm:h-[400px] md:h-[500px]"
              style={{ objectPosition: "50% center" }}
            />
            {/* Since Box */}
           <div className="absolute bottom-[0px] right-[0px] bg-white px-10 py-5 w-[250px] h-[150px] text-[#7A6E92] pentagon-bottom-left">
           <p className="absolute top-2 left-2 text-xl text-style" style={{
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              fontSize: '40px',  }}>Since</p>
         <p className="absolute bottom-2 right-2 text-4xl font-semibold text-style" style={{
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              fontSize: '40px',  }}>2002</p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

SuccessHistory.propTypes = {
  activeTab: PropTypes.string,
  text: PropTypes.string,
};

export default SuccessHistory;
