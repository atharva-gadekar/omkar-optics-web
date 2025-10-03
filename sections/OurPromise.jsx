'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { ourPromises } from '../constants';

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="bg-white rounded-lg p-8 card-shadow hover:scale-105 transition-transform duration-300"
  >
    <div className="text-[48px] mb-4 text-center">{icon}</div>
    <h3 className={`${styles.cardHeading} mb-3 text-center`}>{title}</h3>
    <p className={`${styles.cardText} text-center`}>{description}</p>
  </motion.div>
);

const OurPromise = () => (
  <section className={`${styles.paddings} relative section-gradient`} id="promise">
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
        <h2 className={`${styles.sectionHeading} mb-6`}>Our Promise to You</h2>
        <p className={styles.sectionSubheading}>
          Why choose Omkar Optics for your vision needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {ourPromises.map((promise, index) => (
          <FeatureCard key={promise.id} {...promise} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default OurPromise;
