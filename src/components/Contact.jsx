import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-4 md:gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black border border-gray-600 p-4 md:p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} font-mono`}>ping -c 1</p>
        <h3 className={`${styles.sectionHeadText} font-mono`}>./contact</h3>

        <div className='mt-8 md:mt-12 flex flex-col gap-4 md:gap-8'>
          {/* Email Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4 font-mono'>Email</span>
            <a
              href="mailto:singhatul1155@gmail.com"
              className='bg-black border border-gray-600 py-3 md:py-4 px-4 md:px-6 text-white rounded-lg font-mono hover:border-white transition-all duration-300'
            >
              singhatul1155@gmail.com
            </a>
          </div>

          {/* LinkedIn Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4 font-mono'>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/atul-singh-3012a1203/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-black border border-gray-600 py-3 md:py-4 px-4 md:px-6 text-white rounded-lg font-mono hover:border-white transition-all duration-300'
            >
              linkedin.com/in/atul-singh
            </a>
          </div>

          {/* Twitter Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-2 md:mb-4 font-mono'>Twitter</span>
            <a
              href="https://x.com/AtulPratapSingh"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-black border border-gray-600 py-3 md:py-4 px-4 md:px-6 text-white rounded-lg font-mono hover:border-white transition-all duration-300'
            >
              @AtulPratapSingh
            </a>
          </div>

          {/* Call to Action */}
          <div className='mt-4 md:mt-8'>
            <p className='text-gray-400 text-sm md:text-base leading-relaxed font-mono'>
              $ echo "Open to opportunities and collaborations"
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px] hidden sm:block'
      >
        <EarthCanvas />
      </motion.div>
      
      {/* Mobile-friendly background for small screens */}
      <div className='sm:hidden flex-1 h-[200px] bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center border border-gray-700'>
        <div className='text-center'>
          <div className='text-4xl mb-2'>🌍</div>
          <p className='text-gray-400 text-sm font-mono'>Earth.render()</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");