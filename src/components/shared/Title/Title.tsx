import React from 'react';
import cx from 'classnames';

import styles from './Title.module.scss';

type As = keyof JSX.IntrinsicElements;

interface TitleProps {
  as?: As;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Title = ({
  as: Component = 'h2',
  children,
  variant = 'primary',
  className,
  ...props
}: TitleProps) => {
  return (
    <Component className={cx(styles.title, styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
