import { useState } from "react";
import Maskr from "../assets/Maskr.png"; // Background image for mobile
import rocketIcon from "../assets/rocket.png";
import eyeIcon from "../assets/eye.png";
import targetIcon from "../assets/target.png";

const SuccessHistoryMobile = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const [text, setText] = useState(
    "SRI aims to become a global leader in the steel industry, achieving a production output of 1,500 MT by 2030 while maintaining best-in-class quality standards. Our vision is to be recognized for excellence, reliability, and innovation, ensuring that our customers receive high-performance flanges, fittings, and machined components. SRI is committed to expanding its presence in the Middle East, Southeast Asia, American, and European markets, delivering superior solutions to industries worldwide."
  );

  const ourMission = () => {
    setActiveTab("Mission");
    setText(
      "SRI manufactures high-quality alloy and non-alloy steel, ensuring precision, durability, and global compliance. We enhance production with advanced technology, skilled workforce, and innovation. Committed to integrity, trust, and transparency, we expand globally while prioritizing employee growth, timely delivery, competitive pricing, and exceptional customer service for lasting partnerships."
    );
  };

  const ourVision = () => {
    setActiveTab("Vision");
    setText(
      "SRI aims to become a global leader in the steel industry, achieving a production output of 1,500 MT by 2030 while maintaining best-in-class quality standards. Our vision is to be recognized for excellence, reliability, and innovation, ensuring that our customers receive high-performance flanges, fittings, and machined components. SRI is committed to expanding its presence in the Middle East, Southeast Asia, American, and European markets, delivering superior solutions to industries worldwide."
    );
  };

  const ourGoal = () => {
    setActiveTab("Our Goal");
    setText(
      "SRI aims for 1,500 MT production by 2030 while ensuring top quality. We expand globally, leveraging automation and digital solutions for efficiency. Achieving key certifications, we serve oil, gas, and industrial sectors. A dedicated R&D division drives innovation, enhancing customer satisfaction through swift service, optimized supply chains, and value-added solutions."
    );
  };

  return (
    <section className="flex justify-center py-10 relative overflow-hidden sm:hidden pentagon-bottom-left">
      <div className="relative flex flex-col w-full max-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        
        {/* Top Section - Heading with Background Image */}
        <div
          className="flex flex-col items-center px-6 py-10 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Maskr})` }}
        >
          <h2 className="text-2xl font-bold text-white leading-tight">
            Stepping through our <br /> history of success
          </h2>
        </div>

        {/* Bottom Section - Vision/Mission/Goal */}
        <div className="bg-[#9b83b5] text-white p-6 relative flex flex-col">
          
          {/* Vision, Mission, Goal Buttons */}
          <div className="flex flex-row space-x-4 justify-center">
            <button
              onClick={ourVision}
              className={`flex items-center text-sm ${
                activeTab === "Vision" ? "font-semibold border-b-2" : "opacity-75"
              }`}
            >
              <img src={targetIcon} alt="Vision Icon" className="w-5 h-5 mr-1" />
              <span>OUR VISION</span>
            </button>
            <button
              onClick={ourMission}
              className={`flex items-center text-sm ${
                activeTab === "Mission" ? "font-semibold border-b-2" : "opacity-75"
              }`}
            >
              <img src={eyeIcon} alt="Mission Icon" className="w-5 h-5 mr-1" />
              <span>OUR MISSION</span>
            </button>
            <button
              onClick={ourGoal}
              className={`flex items-center text-sm ${
                activeTab === "Our Goal" ? "font-semibold border-b-2" : "opacity-75"
              }`}
            >
              <img src={rocketIcon} alt="Goal Icon" className="w-5 h-5 mr-1" />
              <span>OUR GOAL</span>
            </button>
          </div>

          {/* Text Box with Fixed Height to Prevent Layout Shift */}
          <div className="mt-6 text-sm leading-tight text-center px-4 min-h-[150px] flex items-center justify-center">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHistoryMobile;
