import React from 'react';
import Box from '@mui/material/Box';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.title}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episoders</h1>
      </Box>
      <Box className={styles.HeroImage} />
    </Box>
  );
};

export default Hero;
