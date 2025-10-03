'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { productCategories } from '../constants';

const ProductCard = ({ imgUrl, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className="relative overflow-hidden rounded-lg card-shadow group cursor-pointer"
  >
    <div className="relative h-[300px] overflow-hidden">
      {/* PLACEHOLDER: Image will be replaced with actual product photos */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-heading font-semibold text-[24px] mb-2">{title}</h3>
        <p className="font-body text-[14px] opacity-90">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Products = () => (
  <section className={`${styles.paddings} relative bg-white`} id="products">
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
        <h2 className={`${styles.sectionHeading} mb-6`}>Our Product Categories</h2>
        <p className={styles.sectionSubheading}>
          Explore our wide range of eyewear solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productCategories.map((category, index) => (
          <a key={category.id} href="/products">
            <ProductCard {...category} index={index} />
          </a>
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="text-center mt-12"
      >
        <a href="/products" className="btn-primary inline-block">
          View All Products
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Products;
