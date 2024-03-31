import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi"; // Import the message icon

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../database/datas";
import { fadeIn, textVariant } from "../utils/motion";

const Tooltip = ({ details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Change initial y position to display below the card
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }} // Change exit y position to hide below the card
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 rounded shadow bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10"
    >
      <p className="text-white">{details}</p>
    </motion.div>
  );
};

const ProjectCard = ({ index, name, name2, description, image, source_code_link }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            ></div>
          </div>
        </div>

        <div className="mt-5">
          <h3
            className="text-white font-bold text-[24px] cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            {name}
          </h3>
          <h3
            className="text-white font-bold text-[20px] cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            {name2}
          </h3>
          <div className="mt-2 cursor-pointer" onClick={toggleTooltip}>
            <FiMessageSquare className="text-white text-3xl" />
          </div>
          {showTooltip && <Tooltip details={description} />}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="h2 text-accent m-10 mb-6 font-bold underline mb-[2rem] text-center  ">Special Guest</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
