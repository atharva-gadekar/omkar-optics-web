'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { testimonials } from '../constants';

const TestimonialCard = ({ name, image, rating, text, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="bg-white rounded-lg p-8 card-shadow"
  >
    <div className="flex items-center mb-4">
      {/* PLACEHOLDER: Replace with actual customer photos */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-heading font-semibold text-[18px] text-text-primary">{name}</h4>
        <div className="flex gap-1 mt-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>
      </div>
    </div>
    <p className={`${styles.cardText} italic`}>"{text}"</p>
  </motion.div>
);

const Testimonials = () => (
  <section className={`${styles.paddings} relative bg-white`} id="testimonials">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center mb-16"
      >
        <h2 className={`${styles.sectionHeading} mb-6`}>What Our Customers Say</h2>
        <p className={styles.sectionSubheading}>
          Trusted by hundreds of satisfied customers in Dombivli
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonials;
