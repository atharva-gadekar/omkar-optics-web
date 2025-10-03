'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className="bg-white rounded-lg p-10 card-shadow hover:scale-105 transition-transform duration-300 border-l-4 border-primary-orange"
  >
    <div className="text-[56px] mb-6 text-center">{icon}</div>
    <h3 className={`${styles.cardHeading} mb-4 text-center`}>{title}</h3>
    <p className={`${styles.cardText} text-center leading-relaxed`}>{description}</p>
  </motion.div>
);

const services = [
  {
    id: 'eye-testing',
    icon: '👁️',
    title: 'Comprehensive Eye Testing',
    description: 'State-of-the-art equipment and experienced optometrists ensure accurate prescriptions and early detection of eye conditions.',
  },
  {
    id: 'frame-fitting',
    icon: '🎯',
    title: 'Expert Frame Fitting',
    description: 'Personalized consultation to find frames that perfectly match your face shape, style preferences, and lifestyle needs.',
  },
  {
    id: 'lens-customization',
    icon: '💎',
    title: 'Premium Lens Options',
    description: 'Choose from anti-glare, blue light blocking, progressive, and photochromic lenses tailored to your specific requirements.',
  },
  {
    id: 'repairs',
    icon: '🔧',
    title: 'Repairs & Adjustments',
    description: 'Same-day repair services, free adjustments, and regular maintenance to keep your eyewear in perfect condition.',
  },
  {
    id: 'insurance',
    icon: '📋',
    title: 'Insurance Assistance',
    description: 'We work with most vision insurance plans and help you maximize your benefits for hassle-free claims.',
  },
  {
    id: 'aftercare',
    icon: '💝',
    title: 'Lifetime Aftercare',
    description: 'Free cleaning, adjustments, and care guidance for the lifetime of your eyewear purchase with us.',
  },
];

const Services = () => (
  <section className={`${styles.paddings} relative bg-gradient-to-b from-white to-warm-beige`} id="services">
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
        <h2 className={`${styles.sectionHeading} mb-6`}>Complete Eye Care Services</h2>
        <p className={`${styles.sectionSubheading} max-w-3xl mx-auto`}>
          From comprehensive eye examinations to expert fittings and ongoing support, 
          we provide everything you need for optimal vision and comfort
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="text-center mt-16 bg-white rounded-2xl p-12 card-shadow"
      >
        <h3 className="font-heading font-bold text-[32px] text-text-primary mb-6">
          Visit Us Today for a Free Eye Examination
        </h3>
        <p className="font-body text-[18px] text-text-secondary mb-8 max-w-2xl mx-auto">
          Schedule your appointment and discover the Omkar Optics difference. 
          We're here to help you see better and look great!
        </p>
        <a href="/contact" className="btn-primary inline-block text-[18px] px-10 py-4">
          Book Your Appointment
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Services;
