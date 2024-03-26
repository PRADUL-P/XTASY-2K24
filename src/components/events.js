import React, { useState } from "react";
import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./day3";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleViewPDF = () => {
    setShowModal(true);
    // Set the PDF URL here
    setPdfUrl(require("../EVENTS REGISTRATION FEE.pdf")); // Assuming the PDF is in the same directory
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "events_schedule.pdf";
    link.href = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="Events">
      <h1 className="text-3xl font-bold mb-4 text-center">Events</h1>
      <div className="flex justify-center">
        {/* Your tabs buttons */}
      </div>
      <div className="flex flex-row">
        {/* Your day-wise details */}
      </div>
      <div className="mt-4 text-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleViewPDF}
        >
          View Events PDF
        </button>
      </div>
     
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="flex justify-center">
        <button
          className={`px-10 m-2 py-2 rounded-r btn btn-sm ${
            activeTab === 0 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(0)}
        >
          17-04-2024 <br />
          WEDNESDAY
        </button>
        <button
          className={`px-10 m-3 py-2 rounded btn btn-sm ${
            activeTab === 1 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(1)}
        >
          18-04-2024 <br />
          THURSDAY
        </button>
        <button
          className={`px-10 m-3 py-2 rounded-l btn btn-sm ${
            activeTab === 2 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(2)}
        >
          19-04-2024<br />
          FRIDAY
        </button>
      </div>
      <div className="flex flex-row">
        {activeTab === 0 && <Day1 />}
        {activeTab === 1 && <Day2 />}
        {activeTab === 2 && <Day3 />}
      </div>
      <div className="mt-4 text-center">
        {/* <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleViewPDF}
        >
          View Events PDF
        </button> */}
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <embed src={pdfUrl} type="application/pdf" width="100%" height="700px" />
                <div className="mt-5 sm:mt-4 flex justify-between">
                  <button
                    onClick={handleDownload}
                    className="inline-block w-1/2 px-4 py-2 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                  >
                    Download Events Schedule
                  </button>
                  <button
                    onClick={closeModal}
                    className="inline-block w-1/2 px-4 py-2 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
