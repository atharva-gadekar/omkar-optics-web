'use client';

import { motion } from 'framer-motion';
import { Footer, Navbar } from '../../components';
import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { storeGallery } from '../../constants';

const GalleryCard = ({ imgUrl, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="relative overflow-hidden rounded-lg card-shadow group"
  >
    <div className="relative h-[350px] overflow-hidden">
      {/* PLACEHOLDER: Images will be replaced with actual store photos */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-heading font-semibold text-[22px] mb-2">{title}</h3>
        <p className="font-body text-[14px] opacity-90">{description}</p>
      </div>
    </div>
  </motion.div>
);

const StorePage = () => (
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
          Our Store & Technology
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.heroSubheading} max-w-3xl mx-auto`}
        >
          Experience our modern facility equipped with state-of-the-art eye care technology
        </motion.p>
      </motion.div>
    </section>

    {/* Store Gallery */}
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
          className="text-center mb-12"
        >
          <h2 className={`${styles.sectionHeading} mb-4`}>Visit Our Store</h2>
          <p className={styles.sectionSubheading}>
            A welcoming environment where quality meets comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storeGallery.map((item, index) => (
            <GalleryCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>

    {/* Technology Section */}
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
          <h2 className={`${styles.sectionHeading} mb-4`}>Modern Eye Care Technology</h2>
          <p className={`${styles.sectionSubheading} max-w-3xl mx-auto`}>
            We invest in the latest equipment to ensure accurate prescriptions and superior eye care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[64px] mb-4">🔬</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Digital Refraction</h3>
            <p className={styles.cardText}>
              Advanced digital technology for precise prescription measurements
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[64px] mb-4">👁️</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Eye Examination</h3>
            <p className={styles.cardText}>
              Comprehensive eye health checks using modern diagnostic equipment
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.6, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[64px] mb-4">⚙️</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Lens Fitting</h3>
            <p className={styles.cardText}>
              Precision lens cutting and fitting for perfect vision correction
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Services Section */}
    <section className={`${styles.paddings} relative`}>
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
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Comprehensive Eye Exams
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Complete vision testing and eye health evaluation to ensure optimal eye care
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'spring', 0.2, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Prescription Glasses
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Custom-fitted prescription eyewear with premium lenses for clear vision
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 'spring', 0.4, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Contact Lens Fitting
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Professional fitting and training for comfortable contact lens wear
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'spring', 0.4, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Frame Adjustments & Repairs
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Expert repairs and adjustments to keep your eyewear comfortable and functional
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 'spring', 0.6, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Kids' Eyewear Specialist
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Special care and selection for children's unique vision needs
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'spring', 0.6, 0.75)}
            className="flex gap-4 bg-light-grey p-6 rounded-lg"
          >
            <div className="flex-shrink-0 text-[36px]">✅</div>
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                Style Consultation
              </h3>
              <p className="font-body text-[16px] text-text-secondary">
                Personal guidance to find frames that complement your face shape and style
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* CTA Section */}
    <section className={`${styles.paddings} relative warm-gradient`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto text-center`}
      >
        <motion.h2
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.sectionHeading} mb-6`}
        >
          Ready to Experience the Difference?
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.sectionSubheading} mb-8`}
        >
          Visit our store today and let us help you find the perfect eyewear solution
        </motion.p>
        <motion.a
          variants={fadeIn('up', 'tween', 0.4, 1)}
          href="/contact"
          className="btn-primary inline-block"
        >
          Get Directions
        </motion.a>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default StorePage;
