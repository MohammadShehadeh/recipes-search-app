import React from 'react';

import styles from './Hero.module.scss';
import { Eyebrow } from '../shared/Eyebrow';
import { Container } from '../shared/Container';

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div
          className={styles.background}
          style={{ backgroundImage: "url('/food-hero.jpg')" }}
        >
          <Container className={styles.wrapper} size="main">
            <Eyebrow label="Healthy Lifestyle" variant="contained" />
            <h1 className={styles.headline}>
              Discover Culinary Excellence 🍽️ Your Gateway to Limitless Recipes!
            </h1>
          </Container>
        </div>
      </section>
      <svg className={styles.separator} preserveAspectRatio="none" viewBox="0 0 1440 74">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </>
  );
};
