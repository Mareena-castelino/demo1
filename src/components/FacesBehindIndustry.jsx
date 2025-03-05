import React from 'react';
import { FaFacebook,  FaInstagram, FaWhatsapp } from 'react-icons/fa';
// Sample images and data
import image1 from '../assets/teamImage1.png';
import image2 from '../assets/teamImage2.png';
import image3 from '../assets/samuel.png';
import image4 from '../assets/sanna.png';

const teamMembers = [
    { id: 1, name: "Samuel Bishop", role: "CEO & Founder", image: image1 },
    { id: 2, name: "John Doe", role: "Chief Technology Officer", image: image2 },
    { id: 3, name: "Jane Smith", role: "Head of Marketing", image: image3 },
    { id: 4, name: "Sanna Lee", role: "Lead Designer", image: image4 },
];

const FacesBehindIndustry = () => {
    return (
        <section className="bg-[#ffffff] flex flex-col items-center py-16 px-4">
            {/* Section Title */}
            <h2 className="text-[42px] font-bold text-[#121212] mb-12 text-center">
                The Faces Behind Industry
            </h2>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl">
                {teamMembers.map((member) => (
                    <div 
                        key={member.id} 
                        className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        {/* Image */}
                        <div className="relative w-60 h-72 overflow-hidden rounded-xl ">
                            <img
                                src={member.image}
                                alt={member.name}
                                className=" w-full h-full object-cover"
                           />
                           
                                <FaFacebook  size={20} color='#E4405F'/>
                                <FaInstagram />
                                <FaWhatsapp />
                                

                        </div>

                        {/* Member Details */}
                        <h3 className="mt-5 text-xl font-semibold text-[#121212]">
                            {member.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FacesBehindIndustry;
