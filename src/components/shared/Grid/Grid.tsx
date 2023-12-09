import React from 'react';
import cx from 'classnames';

import styles from './Grid.module.scss';

interface GridProps {
  children: React.ReactNode;
}

interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
  mdOrder?: number;
  smOrder?: number;
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

Grid.Col = ({ sm, md, lg, mdOrder, smOrder, children }: ColProps) => {
  return (
    <div
      className={cx(styles.col, {
        [styles[`col-sm-${sm}`]]: sm,
        [styles[`col-md-${md}`]]: md,
        [styles[`col-lg-${lg}`]]: lg,
        [styles[`col-md-order-${mdOrder}`]]: mdOrder,
        [styles[`col-sm-order-${smOrder}`]]: smOrder,
      })}
    >
      {children}
    </div>
  );
};
