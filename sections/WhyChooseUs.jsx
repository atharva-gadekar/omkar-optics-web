'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const StatCard = ({ number, label, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className="text-center"
  >
    <div className="font-heading font-bold text-[56px] md:text-[72px] text-primary-orange mb-2">
      {number}
    </div>
    <p className="font-body text-[18px] text-text-secondary">{label}</p>
  </motion.div>
);

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '1000+', label: 'Designer Frames' },
  { number: '100%', label: 'Quality Assured' },
];

const WhyChooseUs = () => (
  <section className={`${styles.paddings} relative bg-white`} id="why-choose-us">
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
        <h2 className={`${styles.sectionHeading} mb-6`}>Why Dombivli Trusts Omkar Optics</h2>
        <p className={`${styles.sectionSubheading} max-w-3xl mx-auto`}>
          Our commitment to excellence and customer satisfaction has made us the preferred choice 
          for eye care in the community
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-gradient-to-br from-warm-beige to-white rounded-2xl p-10 card-shadow">
          <div className="text-[48px] mb-4">🏆</div>
          <h3 className="font-heading font-bold text-[24px] text-text-primary mb-4">
            Award-Winning Service
          </h3>
          <p className="font-body text-[16px] text-text-secondary leading-relaxed">
            Recognized as Dombivli's most trusted optical shop with numerous customer service awards. 
            Our dedication to exceptional care and attention to detail sets us apart.
          </p>
        </div>

        <div className="bg-gradient-to-br from-warm-beige to-white rounded-2xl p-10 card-shadow">
          <div className="text-[48px] mb-4">🌟</div>
          <h3 className="font-heading font-bold text-[24px] text-text-primary mb-4">
            Latest Technology
          </h3>
          <p className="font-body text-[16px] text-text-secondary leading-relaxed">
            Equipped with state-of-the-art diagnostic tools and lens crafting technology. 
            We stay ahead with the latest innovations in eye care and eyewear design.
          </p>
        </div>

        <div className="bg-gradient-to-br from-warm-beige to-white rounded-2xl p-10 card-shadow">
          <div className="text-[48px] mb-4">💰</div>
          <h3 className="font-heading font-bold text-[24px] text-text-primary mb-4">
            Transparent Pricing
          </h3>
          <p className="font-body text-[16px] text-text-secondary leading-relaxed">
            No hidden costs or surprise charges. We believe in honest, upfront pricing with options 
            to suit every budget without compromising on quality.
          </p>
        </div>

        <div className="bg-gradient-to-br from-warm-beige to-white rounded-2xl p-10 card-shadow">
          <div className="text-[48px] mb-4">🤝</div>
          <h3 className="font-heading font-bold text-[24px] text-text-primary mb-4">
            Family-Owned Business
          </h3>
          <p className="font-body text-[16px] text-text-secondary leading-relaxed">
            As a local, family-run establishment, we treat every customer like family. 
            Building lasting relationships with our community is at the heart of what we do.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyChooseUs;
