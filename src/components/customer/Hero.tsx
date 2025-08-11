import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  /*
    Placeholder background.
    I was unable to find a suitable background image using the available tools.
    You can replace this with a background-image property.
    e.g., background-image: url('your-image-url.jpg');
  */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #434343, #000000);
  background-size: cover;
  background-position: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 300;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
`;

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <HeroWrapper>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Title variants={itemVariants}>
          هنر چوب در خانه شما
        </Title>
        <Subtitle variants={itemVariants}>
          پاف‌های چوبی دست‌ساز با طراحی منحصر به فرد
        </Subtitle>
      </motion.div>
    </HeroWrapper>
  );
};

export default Hero;
