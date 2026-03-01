import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Terminal from "./Terminal";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full max-w-[300px] mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gray-900 border border-gray-600 p-[1px] rounded-[20px] shadow-lg hover:border-gray-500 transition-all duration-300'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-6 px-8 min-h-[280px] flex justify-evenly items-center flex-col border border-gray-700'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain filter grayscale'
        />

        <h3 className='text-white text-[20px] font-bold text-center font-mono'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono`}>whoami</p>
        <h2 className={`${styles.sectionHeadText} font-mono`}>./introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px] font-mono'
      >
        I'm a passionate full-stack developer and open source contributor with a proven track record 
        of building innovative solutions. My recent contribution to VLC Media Player, where I successfully 
        implemented a privacy enhancement feature, demonstrates my ability to work on large-scale projects 
        that impact millions of users worldwide. 
        <br /><br />
        With expertise spanning JavaScript, C++, React, Node.js, and AI/ML technologies, I specialize in 
        creating efficient, scalable applications and contributing to meaningful open source projects. 
        I thrive on solving complex problems and turning ideas into reality through clean, maintainable code.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10 px-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20 px-4'>
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionHeadText} text-center mb-10 font-mono`}>
            ./portfolio --interactive
          </h3>
        </motion.div>
        <Terminal />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
