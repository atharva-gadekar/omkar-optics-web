'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative bg-white shadow-md`}
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        {/* Logo */}
        <a href="/" className="flex items-center">
          <h2 className="font-heading font-extrabold text-[28px] text-primary-blue">
            Omkar Optics
          </h2>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="font-body text-[16px] text-text-primary hover:text-primary-blue transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="font-body text-[16px] text-text-primary hover:text-primary-blue hover:bg-light-grey transition-all duration-300 px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
