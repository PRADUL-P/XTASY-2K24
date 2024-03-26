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
          <p className='mb-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 15
          00s, when an unknown printer took a galley of type and scrambled it to make a type specimen b
          ook. It has survived not only five centuries, but also the leap into electronic typesetting, rem
          aining essentially unchanged. It was popularised in the 1960
          s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
           desktop</p>
        
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}} 
        className='flex-1'>  
          <h2 className='h2 text-accent'>About <span className='text-white'>college</span> </h2>
          <h3 className='h3 mb-4'></h3>
          <p className='mb-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 15
          00s, when an unknown printer took a galley of type and scrambled it to make a type specimen b
          ook. It has survived not only five centuries, but also the leap into electronic typesetting, rem
          aining essentially unchanged. It was popularised in the 1960
          s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
           desktop</p>
        
        </motion.div>
      </div>
    </div>
 
    
  </section>
  
  )
};

export default About;
