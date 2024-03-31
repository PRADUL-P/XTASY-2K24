import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { fadeIn } from "../variants";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
   })
  return( 
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'> 
      {/* <motion.div
      variants={fadeIn('right',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}} 
      className='flex-1 bg-about h-[150px]  bg-contain bg-no-repeat mix-blend-lighten bg top'>

      </motion.div> */}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}} 
        className='flex-1'>  
          <h2 className='h2 text-accent'>About <span className='text-white'>event</span> </h2>
          <h3 className='h3 mb-4'></h3>
          <p className='mb-6'>Welcome to XTASY 2K24, where innovation meets celebration! We are thrilled to present our annual extravaganza, XTASY, blending the best of technology and culture under one dynamic roof. From electrifying technical challenges to captivating cultural performances, XTASY promises an unparalleled fusion of excitement, learning, and entertainment. Dive into a world of cutting-edge competitions, workshops by industry experts, and insightful seminars that push the boundaries of innovation. Get ready to be mesmerized by the vibrancy of our cultural events, showcasing talents ranging from music and dance to art and literature.
Join us as we embark on a journey of discovery, creativity, and camaraderie. XTASY 2K24 is not just an event; it’s an experience you won’t want to miss !!</p>
        
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}} 
        className='flex-1'>  
          <h2 className='h2 text-accent'>About <span className='text-white'>college</span> </h2>
          <h3 className='h3 mb-4'></h3>
          <p className='mb-6'>St Thomas Engineering College, Sivapuram, Mattannur was established by St Thomas Educational Society, Adoor with a view to impart high quality engineering education through systematic studies and efficient training. The college has a team of eminent faculty members and a disciplined atmosphere which help to promote a holistic approach to learning. There is a right balance of cognitive, conceptual, ethical, humane and spiritual growth as a whole.</p>
        
        </motion.div>
      </div>
    </div>
 
    
  </section>
  
  )
};

export default About;
