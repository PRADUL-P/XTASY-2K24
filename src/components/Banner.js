import { motion } from "framer-motion";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import logoImage from "../assets/XTASY_2K24.png"; // Update the path to your logo image

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    // Set the PDF URL here
    setPdfUrl(require("../EVENTS REGISTRATION FEE.pdf")); // directory
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "xtasy-schedule.pdf";
    link.href = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="min-h-[46vh] lg:min-h-[78vh]" id="home">
        <div className="container mx-auto flex justify-center items-center text-center">
          <div className="flex items-center gap-y-8 lg:flex-row lg:items-center">
            <div className="flex-1 font-secondary lg:text-center items-center mt-12">
               {/* Logo */}
               <img src={logoImage} alt="Logo" className="mx-auto" style={{ width: "450px", height: "450px" }} />
              <motion.h1
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className="text-[55px] leading-[0.8] lg:text-[110px] m-5 font-monton uppercase"
              >
                XTASY-2K24
              </motion.h1>
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="text-white mr-4 m-5"></span>
                <TypeAnimation
                  sequence={["17 APRIL 2024 ", 2000, "18 APRIL 2024 ", 2000,"19 APRIL 2024 ", 2000]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
              >
                {/* <button  
                  className="btn btn-sm"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://forms.gle/RPtoSDGWfZ8dgJta8';
                  }}
                >
                  REGISTER
                </button> */}
                {/* <a
                  href="#"
                  className="text-gradient btn-link lg:item-center text-center uppercase"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  brochure
                </a> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
               

                <embed src={pdfUrl} type="application/pdf" width="100%" height="700px" />
                <div className="mt-5 sm:mt-4">
                  <button
                    onClick={handleDownload}
                    className="inline-block w-full px-4 py-2 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;

