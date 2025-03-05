import React from 'react';

// Import logos directly
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';

const ScrollingLogos = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  // Duplicate logos array to ensure infinite scrolling
  const allLogos = [...logos, ...logos]; // Duplicate logos for seamless scroll

  return (
    <div className="w-full bg-purple-500 py-8 overflow-hidden">
      <div className="flex animate-scroll gap-4"> {/* Adjusted gap for small space */}
        {allLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-20 h-20 object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0); /* Start from the left */
          }
          100% {
            transform: translateX(-50%); /* Move to the left without idle space */
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 10s linear infinite; /* Adjusted to 10 seconds for faster speed */
        }
      `}</style>
    </div>
  );
};

export default ScrollingLogos;
