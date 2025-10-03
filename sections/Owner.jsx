'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Owner = () => (
  <section className={`${styles.paddings} relative warm-gradient`} id="owner">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Owner Image */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="relative"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden card-shadow">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80"
              alt="Dhananjay - Owner of Omkar Optics"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Owner Info */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex flex-col"
        >
          <h2 className={`${styles.sectionHeading} mb-6`}>Meet Dhananjay</h2>
          <h3 className="font-heading font-semibold text-[24px] text-primary-orange mb-6">
            Owner & Lead Optician
          </h3>
          
          <div className="space-y-5 font-body text-[16px] md:text-[17px] text-text-secondary leading-relaxed">
            <p>
              "At Omkar Optics, we believe that everyone deserves clear vision and eyewear they love. 
              That's why I personally ensure every customer receives individualized attention and expert guidance."
            </p>
            <p>
              With over 15 years of experience in optical care, I founded Omkar Optics to bring professional, 
              personalized eye care to our Dombivli community. We're not just another optical shop—we're your 
              neighborhood vision experts who care about your eye health and satisfaction.
            </p>
            <p>
              My journey in optometry began with a simple mission: to help people see the world more clearly 
              while looking their best. Every day, I work alongside my dedicated team to ensure that mission 
              becomes a reality for each person who walks through our doors.
            </p>
            <p>
              Visit us and experience the difference that personalized care makes. I look forward to helping 
              you find the perfect eyewear solution that combines style, comfort, and precision.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-heading font-semibold text-[18px] text-text-primary">- Dhananjay</p>
            <p className="font-body text-[14px] text-text-secondary">Owner, Omkar Optics</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Owner;
