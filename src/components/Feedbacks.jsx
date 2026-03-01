import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black border border-gray-600 p-4 sm:p-6 lg:p-8 rounded-lg hover:border-gray-400 transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]'
  >
    <div className='text-gray-400 text-2xl mb-4 font-mono'>❝</div>

    <div>
      <p className='text-gray-300 tracking-wide text-[16px] leading-relaxed font-mono italic'>{testimonial}</p>

      <div className='mt-6 border-t border-gray-600/30 pt-4'>
        <div className='flex flex-col'>
          <p className='text-white font-medium text-[14px] font-mono'>
            <span className='text-gray-400'>></span> {name}
          </p>
          <p className='mt-1 text-gray-400 text-[12px] font-mono'>
            {designation} @ {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-black-100 rounded-[20px] feedbacks-section`}>
      <div
        className={`bg-black border border-gray-600 rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} font-mono`}>peer_reviews</p>
          <h2 className={`${styles.sectionHeadText} font-mono`}>./feedback</h2>
        </motion.div>
      </div>
      <div className={`-mt-16 pb-8 ${styles.paddingX} flex flex-wrap gap-4 lg:gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name} 
            index={index} 
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            designation={testimonial.designation}
            company={testimonial.company}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
