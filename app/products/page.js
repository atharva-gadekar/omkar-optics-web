'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Footer, Navbar } from '../../components';
import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { productsGallery, productCategories } from '../../constants';

const ProductCard = ({ imgUrl, title, price, category, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    className="bg-white rounded-lg overflow-hidden card-shadow group"
  >
    <div className="relative h-[280px] overflow-hidden">
      {/* PLACEHOLDER: Images will be replaced with actual product photos */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">{title}</h3>
      <p className="font-body font-bold text-[20px] text-primary-blue">{price}</p>
    </div>
  </motion.div>
);

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? productsGallery 
    : productsGallery.filter(product => product.category === activeFilter);

  return (
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
            Our Products
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className={`${styles.heroSubheading} max-w-3xl mx-auto`}
          >
            Discover our extensive collection of quality eyewear for every style and need
          </motion.p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className={`${styles.xPaddings} py-8 bg-light-grey`}>
        <div className={`${styles.innerWidth} mx-auto`}>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-primary-blue text-white'
                  : 'bg-white text-text-primary hover:bg-medium-grey'
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-blue text-white'
                    : 'bg-white text-text-primary hover:bg-medium-grey'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`${styles.paddings} relative`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-[18px] text-text-secondary">
                No products found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.paddings} relative section-gradient`}>
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
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className={`${styles.sectionSubheading} mb-8`}
          >
            Visit our store to see our complete collection and get personalized recommendations from Dhananjay
          </motion.p>
          <motion.a
            variants={fadeIn('up', 'tween', 0.4, 1)}
            href="/contact"
            className="btn-primary inline-block"
          >
            Visit Our Store
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
