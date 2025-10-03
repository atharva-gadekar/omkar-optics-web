'use client';

import { motion } from 'framer-motion';
import { Footer, Navbar } from '../../components';
import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';

const AboutPage = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    
    {/* Hero Section */}
    <section className={`${styles.paddings} ${styles.navPadding} relative bg-primary-blue`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto text-center`}
      >
        <motion.h1
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.heroHeading} mb-4`}
        >
          About Omkar Optics
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.heroSubheading} max-w-3xl mx-auto`}
        >
          Your neighborhood vision experts serving Dombivli with pride since 2010
        </motion.p>
      </motion.div>
    </section>

    {/* Our Story Section */}
    <section className={`${styles.paddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
            <h2 className={`${styles.sectionHeading} mb-6`}>Our Story</h2>
            <div className="space-y-4 font-body text-[16px] text-text-secondary">
              <p>
                Founded in 2010 by Dhananjay, Omkar Optics began with a simple vision: to provide 
                the Dombivli community with exceptional eye care and quality eyewear at honest prices.
              </p>
              <p>
                What started as a small shop has grown into a trusted name in the community, 
                serving hundreds of satisfied customers who return year after year for their vision needs.
              </p>
              <p>
                Unlike large impersonal chains, at Omkar Optics you're not just a customer—you're 
                part of our family. Dhananjay personally ensures every customer receives the attention, 
                expertise, and care they deserve.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <div className="relative h-[400px] rounded-lg overflow-hidden card-shadow">
              {/* PLACEHOLDER: Replace with actual shop exterior photo */}
              <img
                src="/about/shop-exterior.jpg"
                alt="Omkar Optics Shop Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Our Mission Section */}
    <section className={`${styles.paddings} relative section-gradient`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center mb-12"
        >
          <h2 className={`${styles.sectionHeading} mb-6`}>Our Mission</h2>
          <p className={`${styles.sectionSubheading} max-w-3xl mx-auto`}>
            To enhance the quality of life in our community by providing superior vision care, 
            quality eyewear, and personalized service that makes everyone feel valued and cared for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">🎯</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Quality First</h3>
            <p className={styles.cardText}>
              We source only the finest frames and lenses from trusted manufacturers
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">❤️</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Community Care</h3>
            <p className={styles.cardText}>
              We're proud to be a part of Dombivli and serve our neighbors
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.6, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">💡</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Expert Guidance</h3>
            <p className={styles.cardText}>
              Professional advice tailored to your unique vision needs
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Interior Image Section */}
    <section className={`${styles.paddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="relative h-[500px] rounded-lg overflow-hidden card-shadow"
        >
          {/* PLACEHOLDER: Replace with actual shop interior photo */}
          <img
            src="/about/shop-interior.jpg"
            alt="Omkar Optics Shop Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="text-center mt-6 font-body text-[16px] text-text-secondary"
        >
          Visit our welcoming store in the heart of Dombivli
        </motion.p>
      </motion.div>
    </section>

    {/* Why Choose Us Section */}
    <section className={`${styles.paddings} relative warm-gradient`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.h2
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.sectionHeading} mb-12 text-center`}
        >
          Why Choose Omkar Optics?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Personal Attention
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Dhananjay personally oversees every customer interaction to ensure satisfaction
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'spring', 0.2, 0.75)}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Extensive Selection
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Hundreds of styles from classic to contemporary, for all ages and preferences
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 'spring', 0.4, 0.75)}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Accurate Prescriptions
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Modern equipment and skilled testing ensure your prescription is perfect
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'spring', 0.4, 0.75)}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Fair Pricing
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Quality eyewear at honest prices—no hidden fees or surprise charges
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
