import { Eyebrow } from '../shared/Eyebrow';
import { Container } from '../shared/Container';
import { WaveIcon } from '../shared/Icons';

import styles from './Hero.module.scss';

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
      <WaveIcon className={styles.separator} />
    </>
  );
};
