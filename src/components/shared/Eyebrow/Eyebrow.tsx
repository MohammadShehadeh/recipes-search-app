import styles from './Eyebrow.module.scss';
import cx from 'classnames';

type variants = 'contained' | 'outlined';

interface EyebrowProps {
  label?: string;
  variant?: variants;
}

export const Eyebrow = ({ label, variant = 'contained' }: EyebrowProps) => {
  return (
    <span
      className={cx(styles.eyebrow, {
        [styles[variant]]: variant,
      })}
    >
      <span className={styles.label}>{label}</span>
    </span>
  );
};
