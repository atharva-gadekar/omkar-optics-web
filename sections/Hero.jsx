'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative w-full"
    >
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[600px] md:h-[700px]">
        {/* PLACEHOLDER: Replace /hero-banner.jpg with actual image of a smiling customer wearing stylish glasses */}
        <img
          src="/hero-banner.jpg"
          alt="Happy customer wearing stylish glasses"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient opacity-80" />
        
        {/* Hero Content */}
        <div className={`absolute inset-0 ${styles.xPaddings} flex items-center`}>
          <div className={`${styles.innerWidth} mx-auto`}>
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              <h1 className={`${styles.heroHeading} mb-6`}>
                Clarity in Vision, Quality in Care
              </h1>
              <p className={`${styles.heroSubheading} mb-8 max-w-2xl`}>
                Welcome to Omkar Optics - Your Trusted Local Optician in Dombivli
              </p>
              <motion.a
                href="#products"
                variants={fadeIn('up', 'tween', 0.4, 1)}
                className="btn-primary inline-block"
              >
                Explore Our Collections
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
