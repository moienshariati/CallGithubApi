import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard, { Product } from './ProductCard';

const SectionWrapper = styled.section`
  padding: 100px 40px;
  background-color: #fff;
  overflow: hidden; /* To hide elements before they animate in */
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 60px;
  font-weight: 900;
  color: #333;
`;

const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'پاف چوبی مدل روستیک',
    price: '۱,۲۰۰,۰۰۰ تومان',
    imageUrl: 'https://via.placeholder.com/400x400.png?text=Wood+Pouf+1',
  },
  {
    id: 2,
    name: 'پاف چوبی مدل مدرن',
    price: '۱,۵۰۰,۰۰۰ تومان',
    imageUrl: 'https://via.placeholder.com/400x400.png?text=Wood+Pouf+2',
  },
  {
    id: 3,
    name: 'پاف چوبی مدل کلاسیک',
    price: '۱,۸۰۰,۰۰۰ تومان',
    imageUrl: 'https://via.placeholder.com/400x400.png?text=Wood+Pouf+3',
  },
];

const FeaturedProducts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <SectionWrapper ref={ref}>
      <SectionTitle
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      >
        محصولات ویژه
      </SectionTitle>
      <ProductsGrid
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {mockProducts.map(product => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </ProductsGrid>
    </SectionWrapper>
  );
};

export default FeaturedProducts;
