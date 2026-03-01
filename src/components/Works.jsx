import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black border border-gray-600 p-4 sm:p-5 rounded-2xl w-full sm:w-[calc(50%-0.5rem)] lg:w-[360px] project-card hover:border-white transition-all duration-300 mx-auto'
      >
        <div className='relative w-full h-[180px] sm:h-[200px] lg:h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {/* Play Demo Button */}
            {name === "3D Adventure Game" && (
              <div
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1LUstloRuUuf8ZuzQheGyGL-NZ4CbX_uc?usp=sharing",
                    "_blank"
                  )
                }
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}

            {/* Source Code Button */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain filter grayscale'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] font-mono'>{name}</h3>
          <p className='mt-2 text-gray-400 text-[14px] font-mono leading-relaxed'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className='text-[14px] text-gray-300 font-mono'
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-mono`}>repository.list()</p>
        <h2 className={`${styles.sectionHeadText} font-mono`}>./projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px] font-mono'
        >
          $ ls -la ./projects/
          <br />
          <span className='text-gray-500'># Repository showcase demonstrating technical expertise</span>
          <br />
          <span className='text-gray-500'># Each project includes live demos and source code access</span>
          <br />
          <span className='text-gray-500'># Stack: React, Node.js, C++, Python, Three.js</span>
        </motion.p>
      </div>

      <div className='mt-12 lg:mt-20 flex flex-wrap gap-4 lg:gap-7 project-grid'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");