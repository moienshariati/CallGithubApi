import React from 'react';
import Hero from '../../components/customer/Hero';
import FeaturedProducts from '../../components/customer/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      {/* Other sections can be added here */}
    </>
  );
};

export default Home;
