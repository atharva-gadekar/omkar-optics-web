'use client';

import { motion } from 'framer-motion';
import { Footer, Navbar } from '../../components';
import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { contactInfo } from '../../constants';

const ContactPage = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    
    {/* Hero Section */}
    <section className={`${styles.paddings} ${styles.navPadding} relative bg-primary-orange`}>
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
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.heroSubheading} max-w-3xl mx-auto`}
        >
          We're here to help with all your vision care needs
        </motion.p>
      </motion.div>
    </section>

    {/* Contact Information & Map */}
    <section className={`${styles.paddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
            <h2 className={`${styles.sectionHeading} mb-8`}>Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white text-[24px]">
                  📍
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">
                    Visit Our Store
                  </h3>
                  <p className="font-body text-[16px] text-text-secondary">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white text-[24px]">
                  📞
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">
                    Call Us
                  </h3>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="font-body text-[16px] text-primary-orange hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white text-[24px]">
                  ✉️
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">
                    Email Us
                  </h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="font-body text-[16px] text-primary-orange hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white text-[24px]">
                  🕐
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">
                    Business Hours
                  </h3>
                  <div className="font-body text-[16px] text-text-secondary space-y-1">
                    <p>{contactInfo.hours.weekdays}</p>
                    <p className="text-red-600">{contactInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-medium-grey">
              <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/omkaroptics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
                >
                  <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/omkaroptics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
                >
                  <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
                >
                  <span className="text-[24px]">💬</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <div className="bg-light-grey rounded-lg overflow-hidden card-shadow h-full min-h-[500px]">
              {/* PLACEHOLDER: Replace with actual Google Maps embed for Dombivli location */}
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omkar Optics Location"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Why Visit Section */}
    <section className={`${styles.paddings} relative section-gradient`}>
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
          Why Visit Omkar Optics?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">🎯</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Expert Service</h3>
            <p className={styles.cardText}>
              Personalized attention from experienced professionals who care about your vision
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">🏪</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Convenient Location</h3>
            <p className={styles.cardText}>
              Easy to reach in the heart of Dombivli with ample parking available
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 0.6, 0.75)}
            className="bg-white rounded-lg p-8 card-shadow text-center"
          >
            <div className="text-[48px] mb-4">⏰</div>
            <h3 className={`${styles.cardHeading} mb-3`}>Flexible Hours</h3>
            <p className={styles.cardText}>
              Open 6 days a week with extended hours to fit your schedule
            </p>
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
          Ready to See Clearly?
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.sectionSubheading} mb-8 max-w-2xl mx-auto`}
        >
          No appointment necessary! Walk in during business hours and let us help you find 
          the perfect eyewear solution for your needs.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="btn-primary inline-block"
          >
            Call Now
          </a>
          <a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default ContactPage;
