import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Fday } from "../database/datas";

import { styles } from "../styles";
const ExperienceCard = ({ day1 }) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => setShowModal(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        minWidth: "300px", // Default width
        width: "50%", // Width for large screens
        maxWidth: "800px", // Maximum width
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // iconStyle={{ background: day1.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={day1.icon}
            // alt={day1.company_name}
            className='w-[80%] h-[80%] object-contain rounded-full'
            style={{ display: 'block', margin: 'auto' }}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{day1.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{day1.position}</p>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{day1.years}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {day1.points.map((point, index) => (
          <li key={`day1-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider items-center">
            <h3 className="text-lg font-bold mb-2">{point.header}</h3>
            <p className="text-gray-500 mt-2">{point.date}</p>
            <p className="leading-tight">{point.paragraph}</p>
          </li>
        ))}
      </ul>

      <a className="text-gradient btn-link lg:item-center text-center uppercase m-5" onClick={() => setShowModal(true)}>more details</a>

      {showModal && (
        <>
          <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={handleModalClick}>
            <div className=" relative w-full h-full my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bgc outline-none focus:outline-none">
                <div className=" items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <button className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={handleCloseModal}>
  <span className="text-white-100 h-6 w-6 text-2xl">
    <FontAwesomeIcon icon={faXmark} fade />
  </span>
</button>
                  <h3 className="text-3xl font-semibold text-center">{day1.title}</h3>
                  {/* <p className="text-2xl font-semibold">{day1.years}</p> */}
                  {/* <p>{day1.position}</p> */}
                  <img
  src={day1.icon}
  alt="Event"
  className="w-[40%] max-h-25 mt-4 mx-auto"
  style={{ maxHeight: '50%', display: 'block' }} // Set max height to 50% of modal box height
/>
                 
                </div>

                <div className="relative p-6 flex-auto">
  {/* Display additional data in the modal */}
  <p className="text-3xl font-semibold text-white-100">Event Rules:</p>
  <ul className="list-disc ml-5">
    {day1.rules.map((rule, index) => (
      <li key={`rule-${index}`} className="text-white-500">{rule}</li>
    ))}
  </ul>
  {/* <img src={day1.eventImage} alt="Event" className="w-full max-h-96 object-cover mt-4" /> */}
  {/* <p>Other Details: {day1.otherDetails}</p> */}
</div>


                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
                  <button className="text-gradient px-10 m-2 py-2  btn-link lg:item-center text-center uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>DAY 1</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Fday.map((day1, index) => (
            <ExperienceCard key={`day1-${index}`} day1={day1} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
