import React, { useState } from "react";
import Day1 from "./day1";
import Day2 from "./day2";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id='Events'>
      <div className="flex justify-center">
        <button
          className={`px-10 m-2 py-2 rounded-r btn btn-sm ${
            activeTab === 0 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(0)}
        >
          29-04-23 <br/>
          MONDAY
        </button>
        <button
          className={`px-10 m-3 py-2 rounded-l btn btn-sm ${
            activeTab === 1 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(1)}
        >
          30-04-23 <br/>
          tuesday
        </button>
        <button
          className={`px-10 m-3 py-2 rounded-l btn btn-sm ${
            activeTab === 2 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(2)}
        >
          30-04-23 <br/>
          tuesday
        </button>
      </div>
      <div className="flex flex-row">
        {activeTab === 0 && <Day1 />}
        {activeTab === 1 && <Day2 />}
        {activeTab === 2 && <Day1 />}
      </div>
    </div>
  );
};

export default Tabs;
