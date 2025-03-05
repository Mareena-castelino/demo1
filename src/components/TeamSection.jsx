import React from "react";
import Image1 from "../assets/teamImage1.png";  // Correct path
import Image2 from "../assets/teamImage2.png";  // Correct path

const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          The faces behind industry
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={Image1}  // Correct usage of imported image
              alt="Samuel Bishop"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold text-gray-700">Samuel Bishop</p>
            <p className="text-sm text-gray-500">CEO and Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Image2}  // Correct usage of imported image
              alt="Samuel Bishop"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold text-gray-700">Samuel Bishop</p>
            <p className="text-sm text-gray-500">CEO and Founder</p>
          </div>
          {/* Repeat for other images */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
