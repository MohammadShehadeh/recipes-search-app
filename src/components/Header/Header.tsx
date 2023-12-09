import styles from './Header.module.scss';
import { Container } from '../shared/Container';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="main" className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          Search Recipes
        </a>
      </Container>
    </header>
  );
};
