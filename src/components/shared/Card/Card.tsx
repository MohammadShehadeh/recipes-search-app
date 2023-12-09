import cx from 'classnames';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

type CardProps = {
  image: string;
  title: string;
  id: number;
  className?: string;
};

export const Card = ({ image, title, id, className, ...props }: CardProps) => {
  return (
    <Link to={{ pathname: `/recipe/${id}` }} className={cx(styles.card, className)} {...props}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};
