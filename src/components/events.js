import React, { useState } from "react";
import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./day3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfName, setPdfName] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleViewPDF = (pdfName) => {
    setShowModal(true);
    setPdfName(pdfName);

    // Set the PDF URL based on the PDF name
    switch (pdfName) {
      case "EVENTS REGISTRATION FEE":
        setPdfUrl(require("../EVENTS REGISTRATION FEE.pdf"));
        break;
      case "EVENT COORDINATORS":
        setPdfUrl(require("../EVENT COORDINATORS.pdf"));
        break;
      case "PROGRAMME SCHEDULE":
        setPdfUrl(require("../PROGRAMME SCHEDULE.pdf"));
        break;
      default:
        setPdfUrl("");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPdfName("");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = `${pdfName}.pdf`;
    link.href = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="Events">
      <div className="mt-4 text-center">
        {/* View Events PDF button */}
        <button
          className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase"
          onClick={() => handleViewPDF("EVENTS REGISTRATION FEE")}
        >
          Events Registration Fee
        </button>
        <button
         className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase"
          onClick={() => handleViewPDF("EVENT COORDINATORS")}
        >
          Event Coordinators 
        </button>
        <button
       className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase"
          onClick={() => handleViewPDF("PROGRAMME SCHEDULE")}
        >
          Programme Schedule 
        </button>
      </div>

      <motion.div variants={textVariant()}>
        <h2 className="h2 text-accent m-10 mb-6 font-bold underline mb-[2rem] text-center ">schedule</h2>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-center">
  {/* Tab buttons */}
  <button
    className={`px-10 m-2 py-2 btn btn-sm ${activeTab === 0 ? "btn btn-lg" : "bg-gray-400 hover:bg-gray-500"}`}
    onClick={() => handleTabClick(0)}
  >
    17-04-2024 <br />
    WEDNESDAY
  </button>
  <button
    className={`px-10 m-2 py-2 btn btn-sm ${activeTab === 1 ? "btn btn-lg" : "bg-gray-400 hover:bg-gray-500"}`}
    onClick={() => handleTabClick(1)}
  >
    18-04-2024 <br />
    THURSDAY
  </button>
  <button
    className={`px-10 m-2 py-2  btn btn-sm ${activeTab === 2 ? "btn btn-lg" : "bg-gray-400 hover:bg-gray-500"}`}
    onClick={() => handleTabClick(2)}
  >
    19-04-2024<br />
    FRIDAY
  </button>
</div>

      <div className="flex flex-row">
        {/* Day-wise details */}
        {activeTab === 0 && <Day1 />}
        {activeTab === 1 && <Day2 />}
        {activeTab === 2 && <Day3 />}
      </div>
      
      {/* Modal for displaying PDF */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg--500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-between items-center">
               {/* PDF title */}
  <h3 className="text-xl font-semibold text-gradient">{pdfName}</h3>
  {/* Close button */}
  <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={closeModal}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
 
</div>
              <div className="px-4 pb-4 sm:pb-4">
                <embed src={pdfUrl} type="application/pdf" width="100%" height="700px" />
                <div className="mt-5 sm:mt-4 flex justify-between">
                  <button
                    onClick={handleDownload}
                    className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase"   >
                    Download 
                  </button>
                  <button  
                  className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://forms.gle/RPtoSDGWfZ8dgJta8';
                  }}
                >
                  REGISTER
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
