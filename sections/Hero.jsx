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
        <img
          src="https://images.unsplash.com/photo-1456421385613-d0666bb96b78?q=80&w=2074&auto=format&fit=crop"
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
              <h1 className={`${styles.heroHeading} mb-8`}>
                Clarity in Vision, Quality in Care
              </h1>
              <p className={`${styles.heroSubheading} mb-6 max-w-3xl leading-relaxed`}>
                Welcome to Omkar Optics - Your Trusted Local Optician in Dombivli
              </p>
              <p className="font-body text-white text-[18px] md:text-[20px] mb-10 max-w-2xl opacity-90">
                Experience personalized eye care with over 15 years of expertise. From comprehensive eye tests 
                to designer frames, we're committed to helping you see clearly and look amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#products"
                  variants={fadeIn('up', 'tween', 0.4, 1)}
                  className="btn-primary inline-block text-[18px] px-8"
                >
                  Explore Our Collections
                </motion.a>
                <motion.a
                  href="/contact"
                  variants={fadeIn('up', 'tween', 0.5, 1)}
                  className="bg-white text-primary-orange inline-block px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Book Appointment
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
