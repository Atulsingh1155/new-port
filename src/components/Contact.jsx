import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          {/* Email Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <a
              href="mailto:singhatul1155@gmail.com"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:bg-secondary transition-colors duration-300'
            >
              singhatul1155@gmail.com
            </a>
          </div>

          {/* LinkedIn Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/atul-singh-3012a1203/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:bg-secondary transition-colors duration-300'
            >
              linkedin.com/in/atul-singh-3012a1203
            </a>
          </div>

          {/* Twitter Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Twitter</span>
            <a
              href="https://x.com/ThakurAtulPrat5"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:bg-secondary transition-colors duration-300'
            >
              @ThakurAtulPrat5
            </a>
          </div>

          {/* Optional: Call to Action */}
          <div className='mt-8'>
            <p className='text-secondary text-[16px] leading-[24px]'>
              Feel free to reach out to me through any of the above channels. I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");