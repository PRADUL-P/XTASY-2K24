import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Sday } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ day3 }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={day3.date}
      iconStyle={{ background: day3.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="w-[60%] h-[60%] object-contain ">
            {" "}
            {day3.activity_points}{" "}
          </h1>
          {/* <img
            src={day3.icon}
            alt={day3.company_name}
            className='w-[60%] h-[60%] object-contain'
          /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{day3.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {day3.activity_points}
        </p>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {day3.fee}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {day3.points.map((point, index) => {
          const maxLength = 200; // Set the maximum length of the truncated text
          const truncatedPoint =
            point.length > maxLength
              ? point.substring(0, maxLength) + "..."
              : point; // Truncate the text if it's longer than maxLength

          return (
            <li
              key={`day3-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider items-center"
            >
              <p className="leading-tight">{truncatedPoint}</p>
              {point.length > maxLength && (
                <button
                  className="text-blue-500 font-bold hover:text-blue-700 "
                  onClick={() => window.alert(point)}
                >
                  Read More
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <a
        className="text-gradient btn-link lg:item-center text-center uppercase  m-5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        more details
      </a>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bgc outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold ">{day3.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white-100   h-6 w-6 text-2xl  ">
                      <FontAwesomeIcon
                        icon={faXmark}
                        fade
                        className="text-white 
                    "
                      />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {day3.points}
                  </p>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {day3.activity_points}
                  </p>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {day3.fee}
                  </p>
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    register now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          DAY 3<br />
          19/04/2024
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>events</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Sday.map((day3, index) => (
            <ExperienceCard key={`day3-${index}`} day3={day3} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
