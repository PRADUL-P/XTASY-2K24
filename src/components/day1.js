import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Fday } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ day1 }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={day1.date}
       iconStyle={{ background: day1.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <h1  className='w-[60%] h-[60%] object-contain '> {day1.activity_points} </h1>
          {/* <img
            src={day1.icon}
            alt={day1.company_name}
            className='w-[60%] h-[60%] object-contain'
          /> */}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{day1.title}</h3>
        
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {day1.points.map((point, index) => (
          <li
            key={`day1-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div>
      <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day1.activity_points}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day1.fee}
        </p>
      </div>
      <a
 href={require("../AAKRITI.pdf")}
  className="text-gradient btn-link lg:item-center text-center uppercase"
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.download = "AAKRITI BROCHURE.pdf";
    link.href = e.target.href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  brochure
</a>
      
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          day 1
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         events
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {Fday.map((day1, index) => (
            <ExperienceCard
              key={`day1-${index}`}
              day1={day1}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
