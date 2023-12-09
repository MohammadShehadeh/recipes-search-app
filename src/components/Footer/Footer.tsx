import styles from './Footer.module.scss';
import { Container } from '../shared/Container';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        Copyright © {new Date().getFullYear()} Mohammad Shehadeh. All rights reserved.
      </Container>
    </footer>
  );
};
