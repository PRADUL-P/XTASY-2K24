import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { styles } from "../styles";
import { contact } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ServiceCard = ({ index, title, contact,whatsapp,role }) => (
  
  <Tilt className="xs:w-[25px] w-full" >
    <motion.div
  id='Contacts'
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
>
  <div
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  >
    <h3 className="text-white text-[20px] font-bold text-center">
      {title}
    </h3>
    <p>{role}</p>
    <div className="flex items-center justify-center">
    <a href={`tel:${contact}`}>
 {contact}
</a>
{/* <FontAwesomeIcon icon="fa-solid fa-phone" shake /> */}
    </div>
    <div className="flex flex-row">
    <a href={`tel:${contact}`}>
      <FontAwesomeIcon icon={faPhone} className="text-white text-2xl mr-2 "shake />

      
  
</a>
    <a
        href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Enquiring%20about%20Techfest`}
        target="_blank"
        rel="noopener noreferrer"
      ><FontAwesomeIcon icon={faWhatsapp} className="text-green-400 mx-5 text-2xl mr-2" beat fade />

        {/* <FaWhatsapp className="text-white text-2xl" /> */}
      </a>
    </div>
  </div>
</motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>contact us</p>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
 
      </motion.p>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0"
      >
        {contact.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
