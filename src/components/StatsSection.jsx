import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our expertise and experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-purple-700">92%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">32</h3>
            <p>Industries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">350+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
