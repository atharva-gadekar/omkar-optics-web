'use client';

import { motion } from 'framer-motion';
import { socials, contactInfo } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-12 relative bg-light-grey`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-heading font-bold text-[24px] text-text-primary mb-4">
            Omkar Optics
          </h3>
          <p className="font-body text-[14px] text-text-secondary mb-4">
            Your trusted local optician in Dombivli. We provide high-quality eyewear and personalized care to help you see the world clearly.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-[18px] text-text-primary mb-4">
            Contact Us
          </h4>
          <div className="space-y-2 font-body text-[14px] text-text-secondary">
            <p>{contactInfo.address}</p>
            <p>Phone: <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary-orange">{contactInfo.phone}</a></p>
            <p>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-orange">{contactInfo.email}</a></p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading font-semibold text-[18px] text-text-primary mb-4">
            Business Hours
          </h4>
          <div className="space-y-2 font-body text-[14px] text-text-secondary">
            <p>{contactInfo.hours.weekdays}</p>
            <p>{contactInfo.hours.sunday}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col">
        <div className="mb-4 h-[1px] bg-text-secondary opacity-20" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-body text-[14px] text-text-secondary">
            © {new Date().getFullYear()} Omkar Optics. All rights reserved.
          </p>
          <p className="font-body text-[12px] text-text-secondary">
            Proudly serving Dombivli and surrounding areas
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
