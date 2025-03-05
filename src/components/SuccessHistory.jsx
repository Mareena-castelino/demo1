import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HistorySuccess = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const tabContent = {
    vision: "Our mission is to embody our values and purpose in everything we do. We are dedicated to serving our customers, partners, and communities with integrity, innovation, and excellence.",
    mission: "Our mission is to innovate and push boundaries, setting new standards in the industry with sustainability and excellence at our core.",
    goal: "Our goal is to provide outstanding services and products while exceeding customer expectations and fostering a culture of innovation.",
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800">Stepping through our history of success</h2>
        <div className="mt-4 flex space-x-4 border-b pb-2">
          <Button
            variant="ghost"
            className={activeTab === "vision" ? "border-b-2 border-purple-500" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </Button>
          <Button
            variant="ghost"
            className={activeTab === "mission" ? "border-b-2 border-purple-500" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </Button>
          <Button
            variant="ghost"
            className={activeTab === "goal" ? "border-b-2 border-purple-500" : ""}
            onClick={() => setActiveTab("goal")}
          >
            Our Goal
          </Button>
        </div>
        <p className="mt-4 text-gray-600">{tabContent[activeTab]}</p>

        <div className="relative mt-6">
          <img
            src="/your-image-path.jpg"
            alt="Caliper Measurement"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md">
            <p className="text-sm">Since</p>
            <p className="text-lg font-bold">2002</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySuccess;
