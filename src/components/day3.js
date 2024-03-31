import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Tday } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ day3 }) => {
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
    // date={day3.date}
    iconStyle={{ background: day3.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* <h1 className="w-[60%] h-[60%] object-contain ">
          {" "}
          {day3.position}{" "}
        </h1> */}
        <img
          src={day3.icon}
          alt={day3.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{day3.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {day3.position}
      </p>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {day3.years}
      </p>
    
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
{day3.points.map((point, index) => {
  const maxLength = 160;
  const truncatedPoint = point.paragraph && point.paragraph.length > maxLength ? point.paragraph.substring(0, maxLength) + '...' : point.paragraph;
  
  return (
    <li key={`day3-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider items-center">
      <h3 className="text-lg font-bold mb-2">{point.header}</h3><p className="text-gray-500 mt-2">{point.date}</p>
      {truncatedPoint && <p className="leading-tight">{truncatedPoint}</p>}
      
     
      {point.paragraph && point.paragraph.length > maxLength && (
        <button className="text-blue-500 font-bold hover:text-blue-700 " onClick={() => setShowModal(true)}>
          Read More
        </button>
        
      )}
    </li>
  );
})}
</ul>


    {/* <ul className="mt-5 list-disc ml-5 space-y-2">
{day3.points.map((point, index) => {
  const maxLength = 200; // Set the maximum length of the truncated text
  const truncatedPoint = point.length > maxLength ? point.substring(0, maxLength) + '...' : point; // Truncate the text if it's longer than maxLength
  
  return (
    <li key={`day3-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider items-center">
      <h3 className="text-lg font-bold mb-2">{point.header}</h3>
      <p className="leading-tight">{truncatedPoint}</p>
      <p className="text-gray-500 mt-2">{point.date}</p>
     
      {point.length > maxLength && (
        <button className="text-blue-500 font-bold hover:text-blue-700 " onClick={() => window.alert(point)}>
          Read More
        </button>
      )}
    </li>
  );
})}
</ul> */}


    <a
      className="text-gradient btn-link lg:item-center text-center uppercase  m-5"
      type="button"
      onClick={() => setShowModal(true)}
    >
      more details
    </a>
    {showModal ? (
      <>
        <div className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={handleModalClick}>
          <div className="relative w-full h-full my-6 mx-auto max-w-6xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bgc outline-none focus:outline-none">
              {/*header*/}
              <div className=" items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold ">{day3.title}</h3>
              <p className="text-2xl font-semibold ">{day3.years}</p>
              {day3.position}
                <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleCloseModal}
              >
                  <span className="text-white-100   h-6 w-6 text-2xl  ">
                  <FontAwesomeIcon icon={faXmark} fade className="text-white 
                  " />
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
              <ul className="mt-5 list-disc ml-5 space-y-2">
{day3.points.map((point, index) => {
  const maxLength = 200;
  const truncatedPoint = point.paragraph && point.paragraph.length > maxLength ? point.paragraph.substring(0, maxLength) + '...' : point.paragraph;
  
  return (
    <li key={`day3-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider items-center">
      <h3 className="text-lg font-bold mb-2">{point.header}</h3>
      {/* {truncatedPoint && <p className="leading-tight">{truncatedPoint}</p>} */}
      <p className="text-gray-500 mt-2">{point.date}</p>
      <p className="text-gray-500 mt-2">{point.paragraph}</p>
     
  
    </li>
  );
})}
</ul>
                {/* <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {day3.position}
      </p>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {day3.fee}
      </p> */}
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {/* <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  register now
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          day 2<br />
          27/04/2023
        </p> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>DAY 3</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Tday.map((day3, index) => (
            <ExperienceCard key={`day3-${index}`} day3={day3} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
